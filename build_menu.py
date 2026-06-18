# -*- coding: utf-8 -*-
"""Reconstruit menu.ts a partir de 890images.csv (name + prix + image officiels)."""
import os, re, urllib.request, ssl

ROOT = os.path.dirname(os.path.abspath(__file__))
CSV = os.path.join(ROOT, ".claude", "890images.csv")
IMGDIR = os.path.join(ROOT, "client", "public", "images", "menu")
OUT = os.path.join(ROOT, "client", "src", "data", "menu.ts")
os.makedirs(IMGDIR, exist_ok=True)
ctx = ssl.create_default_context(); ctx.check_hostname = False; ctx.verify_mode = ssl.CERT_NONE

# 78a5ecd5 = V6 (vraie photo bœuf enoki) ; 5fe72 = V5 mais V5 utilise un override studio.
PLACEHOLDERS = set()
OVERRIDE = {
    "V5": ("/images/sig-boeuf-mala.jpg", True),
    "V10": ("/images/sig-poulet-piments.jpg", True),
    "F5": ("/images/sig-poisson-choucroute.jpg", True),
}
META = {
 "E1":("凉拌土豆丝",1,True),"E2":("拍黄瓜",1,True),"E3":("凉拌金针菇",1,True),"E4":("皮蛋豆腐",1,False),
 "E5":("口水鸡",2,False),"E6":("蒜泥白肉",2,False),"E7":("夫妻肺片",2,False),"E8":("鸡肉春卷",0,False),"E9":("鸡肉煎饺",0,False),
 "S1":("招牌鲈鱼肥肠",3,False),"S2":("冒菜烤鸭",2,False),
 "V1":("芋儿鸡",2,False),"V2":("重庆鸡公煲",3,False),"V3":("毛血旺",3,False),"V4":("脑花冒菜",3,False),
 "V5":("水煮牛肉",3,False),"V6":("金针菇肥牛",2,False),"V7":("豆腐烧牛肉",2,False),"V8":("豆腐烧肥肠",2,False),
 "V9":("椒麻鸡",2,False),"V10":("辣子鸡",3,False),"V11":("小炒鸡",2,False),"V12":("爆炒鸡杂",2,False),
 "V13":("泡椒鸡杂",2,False),"V14":("爆炒肥肠",2,False),"V15":("孜然羊排",2,False),"V16":("京酱肉丝",1,False),
 "V17":("烤鸭",0,False),"V18":("招牌猪蹄",2,False),"V19":("双椒兔",3,False),"V20":("麻辣兔",3,False),
 "V21":("辣子田鸡",3,False),"V22":("泡椒田鸡",2,False),"V23":("干锅时蔬",2,True),
 "F1":("烤鲈鱼",2,False),"F2":("清蒸鲈鱼",0,False),"F3":("水煮鱼",3,False),"F4":("水煮鲈鱼",3,False),
 "F5":("酸菜鱼",2,False),"F6":("酸菜鲈鱼",2,False),"F7":("青椒鱼",2,False),"F8":("蒜蓉小龙虾",1,False),
 "F9":("十三香小龙虾",2,False),"F10":("麻辣小龙虾",3,False),"F11":("干锅虾",2,False),"F12":("椒盐虾",1,False),
 "F13":("辣炒鱿鱼须",2,False),"F14":("铁板鱿鱼",2,False),"F15":("泡椒鱿鱼",2,False),"F16":("麻辣蛏子",2,False),
 "F17":("葱姜蛏子",1,False),"F18":("辣炒蟹",2,False),"F19":("葱姜蟹",1,False),
 "P1":("蚂蚁上树",1,False),"P2":("柠檬鸡",0,False),"P3":("宫保鸡丁",2,False),"P4":("糖醋里脊",0,False),
 "P5":("回锅肉",2,False),"P6":("鱼香肉丝",2,False),"P7":("三鲜豆腐",1,False),"P8":("洋葱牛肉",1,False),
 "P9":("孜然牛肉",2,False),"P10":("香菜牛肉",1,False),"P11":("小炒牛肉",2,False),"P12":("泡椒牛肉",2,False),"P13":("脆皮鸡",1,False),
 "L1":("麻婆豆腐",3,False),"L2":("鱼香茄子",1,True),"L3":("肉末茄子",1,False),"L4":("地三鲜",1,True),
 "L5":("手撕包菜",1,True),"L6":("蒜蓉青菜",0,True),"L7":("干煸四季豆",1,False),"L8":("豉油秋葵",0,True),
 "L9":("干锅花菜",1,True),"L10":("腐乳空心菜",1,True),"L11":("蒜蓉茼蒿",0,True),
 "U1":("酸辣汤",1,False),"U2":("牛肉蘑菇汤",1,False),"U3":("酸菜粉丝汤",1,False),
 "A1":("煎饼",0,True),"A2":("白米饭",0,True),"A3":("扬州炒饭",0,False),"A4":("牛肉炒饭",1,False),
 "A5":("素炒面",0,True),"A6":("鸡肉炒面",0,False),"A7":("牛肉炒面",0,False),"A8":("担担面",2,False),"A9":("鲜虾馄饨",0,False),
}
CATS = [
 ("entrees","Entrées","凉菜","Petites assiettes pour ouvrir le repas.","E"),
 ("specialites","Nos Spécialités","招牌菜","Les grands plats à partager qui font la réputation du 890.","S"),
 ("viandes","Viandes","肉类","Plats de viande à partager.","V"),
 ("fruits-de-mer","Plats fruits de mer","海鲜","","F"),
 ("sautes","Plats sautés","热炒","","P"),
 ("legumes","Légumes","蔬菜","","L"),
 ("soupe","Soupe","汤","","U"),
 ("accompagnements","Accompagnements","主食","","A"),
]

def idfromurl(u):
    m = re.search(r"/media/([a-z0-9_]+)~mv2", u)
    return m.group(1) if m else None

def esc(s): return s.replace("\\","\\\\").replace('"','\\"')

def download(slug, url):
    iid = idfromurl(url)
    if not iid or iid in PLACEHOLDERS: return None
    dest = os.path.join(IMGDIR, slug+".jpg")
    fill = url + "/v1/fill/w_600,h_420,al_c,q_82,enc_auto/x.jpg"
    try:
        req = urllib.request.Request(fill, headers={"User-Agent":"Mozilla/5.0"})
        data = urllib.request.urlopen(req, context=ctx, timeout=30).read()
        with open(dest,"wb") as o: o.write(data)
        return "/images/menu/"+slug+".jpg"
    except Exception as e:
        print("ERR", slug, e); return None

# ---- Parse CSV ----
rows = {}      # code -> (name, price, url)
ordered = []   # (label, url) in order
with open(CSV, encoding="utf-8") as f:
    for line in f:
        line = line.strip()
        if not line or ";" not in line: continue
        label, url = line.split(";", 1)
        label = label.strip(); url = url.strip()
        ordered.append((label, url))
        m = re.match(r"^([ESVFPLUA]\d+)\.\s*(.*)$", label)
        if not m: continue
        code, rest = m.group(1), m.group(2)
        pm = re.search(r"([\d]+,[\d]{2})\s*€\s*$", rest)
        if not pm: continue
        rows[code] = (rest[:pm.start()].strip(), pm.group(1)+" €", url)

def dish_line(name, cn, price, spice, veg, img, sig):
    parts = ['name: "%s"' % esc(name)]
    if cn: parts.append('cn: "%s"' % cn)
    parts.append('price: "%s"' % price)
    if spice: parts.append("spice: %d" % spice)
    if veg: parts.append("veg: true")
    if img: parts.append('image: "%s"' % img)
    if sig: parts.append("signature: true")
    return "      { " + ", ".join(parts) + " },"

blocks = []
for cid,title,cn,note,prefix in CATS:
    codes = sorted([c for c in rows if re.match("^"+prefix+r"\d+$", c)], key=lambda x:int(x[1:]))
    dishes = []
    for code in codes:
        name, price, url = rows[code]
        cns, spice, veg = META.get(code, ("",0,False))
        if code in OVERRIDE:
            img, sig = OVERRIDE[code]
        else:
            img, sig = download(code.lower(), url), False
        dishes.append(dish_line(name, cns, price, spice, veg, img, sig))
    note_s = ('\n    note: "%s",' % esc(note)) if note else ""
    blocks.append('  {\n    id: "%s",\n    title: "%s",\n    cn: "%s",%s\n    dishes: [\n%s\n    ],\n  },'
                  % (cid, esc(title), cn, note_s, "\n".join(dishes)))

# ---- Sections non codées (apres A9) : desserts + boissons, avec images ----
last_a = max(i for i,(lab,u) in enumerate(ordered) if re.match(r"^A\d+\.", lab))
post = [(lab,u) for (lab,u) in ordered[last_a+1:] if lab]   # 43 lignes ordonnées

def split_price(label):
    pm = re.search(r"([\d]+,[\d]{2})\s*€\s*$", label)
    if not pm: return label.strip(), ""
    return label[:pm.start()].strip(), pm.group(1)+" €"

# Ordre fixe du CSV : desserts 7, rouges 6, blancs 4, rosés 2, baijiu 4, bières 3, boissons 17
SECTIONS = [
 ("desserts","Desserts Spéciaux","甜点",7,
   ["糖水荔枝","椰丝糯米糍","绿茶冰淇淋","红糖凉糕","珍珠丸子","椰汁银耳","糍粑条"], True),
 ("vins-rouges","Vins rouges","红葡萄酒",6,None,False),
 ("vins-blancs","Vins blancs","白葡萄酒",4,None,False),
 ("vins-roses","Vins rosés","桃红葡萄酒",2,None,False),
 ("alcools-chinois","Alcools chinois (Baijiu)","白酒",4,None,False),
 ("bieres","Bières","啤酒",3,None,False),
 ("boissons","Boissons sans alcool","无酒精饮料",17,None,False),
]
idx = 0
for cid,title,cn,count,cns_list,veg in SECTIONS:
    seg = post[idx:idx+count]; idx += count
    dishes = []
    for j,(lab,url) in enumerate(seg):
        name, price = split_price(lab)
        cns = cns_list[j] if cns_list else ""
        img = download(cid.replace("-","")+str(j+1), url)
        dishes.append(dish_line(name, cns, price, 0, veg, img, False))
    blocks.append('  {\n    id: "%s",\n    title: "%s",\n    cn: "%s",\n    dishes: [\n%s\n    ],\n  },'
                  % (cid, esc(title), cn, "\n".join(dishes)))

# Brochettes : lignes non codées entre la dernière U et la première A, AVEC images
last_u = max(i for i,(lab,u) in enumerate(ordered) if re.match(r"^U\d+\.", lab))
first_a = min(i for i,(lab,u) in enumerate(ordered) if re.match(r"^A\d+\.", lab))
broch_rows = [(lab,u) for (lab,u) in ordered[last_u+1:first_a] if lab]
BROCH_CN = ["鸡肉串","鸡胗","鸡心","鸡翅","鸡架","羊肉","羊肉","羊腰","羊排","羊腿","牛肉","牛筋",
 "五花肉","五花肉","猪腰","肥肠","猪脑","猪蹄","香肠","台湾烤肠","鹌鹑蛋","鱼丸","小黄鱼","虾",
 "鱿鱼","鱿鱼须","蛏子","蛏子","兔腿","花菜","金针菇","辣椒","藕","土豆","五香豆腐","馒头","糍粑","豆皮","韭菜"]
bdishes = []
for j,(lab,url) in enumerate(broch_rows):
    name, price = split_price(lab)
    cns = BROCH_CN[j] if j < len(BROCH_CN) else ""
    veg = j >= 29
    img = download("broch"+str(j+1), url)
    bdishes.append(dish_line(name, cns, price, 0, veg, img, False))
BROCH = ('  {\n    id: "brochettes",\n    title: "Brochettes",\n    cn: "烧烤",'
         '\n    note: "Grillées à la minute. Prix à la pièce sauf mention.",\n    dishes: [\n%s\n    ],\n  },'
         % "\n".join(bdishes))

# Insertion : brochettes juste apres accompagnements (index 8 dans blocks)
blocks.insert(8, BROCH)

header = '''// Carte officielle du 890 Restaurant — généré depuis 890images.csv (noms, prix, images officiels).
// spice : 0 = doux · 1 = parfumé · 2 = relevé · 3 = mala intense · simple : liste compacte.

export type Dish = {
  name: string;
  cn?: string;
  desc?: string;
  price: string;
  spice?: 0 | 1 | 2 | 3;
  image?: string;
  signature?: boolean;
  veg?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  cn: string;
  note?: string;
  simple?: boolean;
  dishes: Dish[];
};

export const MENU: MenuCategory[] = [
'''

with open(OUT, "w", encoding="utf-8") as f:
    f.write(header)
    f.write("\n".join(blocks))
    f.write("\n];\n")

print("DONE. images ->", len(os.listdir(IMGDIR)), "files")
