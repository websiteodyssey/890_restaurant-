# -*- coding: utf-8 -*-
"""Genere les versions agrandies (visionneuse) des photos de la carte.

- client/public/images/menu/zoom/<slug>.jpg : la meme photo que la vignette, agrandie x4. Melange 40 % Real-ESRGAN
  / 60 % Lanczos + legere nettete : l'IA seule donne un rendu lisse "dessin anime", le melange garde le grain photo.
- client/src/data/zoom.ts                   : table image -> image agrandie utilisee par la page Carte

Real-ESRGAN (realesrgan-ncnn-vulkan.exe) : chemin via la variable d'env REALESRGAN, ou telecharger
https://github.com/xinntao/Real-ESRGAN/releases (realesrgan-ncnn-vulkan-20220424-windows.zip).
"""
import os, re, sys, shutil, subprocess, tempfile
from PIL import Image, ImageFilter

ROOT = os.path.dirname(os.path.abspath(__file__))
PUB = os.path.join(ROOT, "client", "public")
MENU_TS = os.path.join(ROOT, "client", "src", "data", "menu.ts")
OUT_TS = os.path.join(ROOT, "client", "src", "data", "zoom.ts")
ZOOM = os.path.join(PUB, "images", "menu", "zoom")
ESRGAN = os.environ.get("REALESRGAN", "")
SMALL = 500  # en dessous de cette largeur, l'image a besoin d'une version agrandie
os.makedirs(ZOOM, exist_ok=True)

menu = open(MENU_TS, encoding="utf-8").read()
images = sorted(set(re.findall(r'image:\s*"([^"]+)"', menu)))

mapping = {}
todo_esrgan = []
for p in images:
    f = os.path.join(PUB, p.lstrip("/").replace("/", os.sep))
    if not os.path.exists(f): print("MISSING", p); continue
    w, h = Image.open(f).size
    if w >= SMALL: continue  # deja assez grande
    slug = os.path.splitext(os.path.basename(p))[0]
    todo_esrgan.append((p, f, slug))

if todo_esrgan:
    if not ESRGAN or not os.path.exists(ESRGAN):
        print("REALESRGAN introuvable : %d images non agrandies" % len(todo_esrgan)); sys.exit(1)
    tmp_in = tempfile.mkdtemp(); tmp_out = tempfile.mkdtemp()
    for p, f, slug in todo_esrgan: shutil.copy(f, os.path.join(tmp_in, slug + ".jpg"))
    subprocess.run([ESRGAN, "-i", tmp_in, "-o", tmp_out, "-n", "realesrgan-x4plus", "-s", "4", "-f", "png"],
                   check=True, capture_output=True)
    for p, f, slug in todo_esrgan:
        src = os.path.join(tmp_out, slug + ".png")
        if not os.path.exists(src): print("ERR ESRGAN", slug); continue
        esr = Image.open(src).convert("RGB")
        lan = Image.open(f).convert("RGB").resize(esr.size, Image.LANCZOS)
        out = Image.blend(lan, esr, 0.4).filter(ImageFilter.UnsharpMask(radius=1.5, percent=40, threshold=2))
        out.save(os.path.join(ZOOM, slug + ".jpg"), "JPEG", quality=88, optimize=True)
        mapping[p] = "/images/menu/zoom/" + slug + ".jpg"
        print("x4 ", slug)
    shutil.rmtree(tmp_in); shutil.rmtree(tmp_out)

lines = ["// Genere par build_zoom.py : image de la carte -> version agrandie pour la visionneuse.",
         "export const ZOOM: Record<string, string> = {"]
for k in sorted(mapping): lines.append('  "%s": "%s",' % (k, mapping[k]))
lines.append("};")
lines.append("export const zoomSrc = (src: string) => ZOOM[src] ?? src;")
open(OUT_TS, "w", encoding="utf-8").write("\n".join(lines) + "\n")
print("mapping:", len(mapping))
