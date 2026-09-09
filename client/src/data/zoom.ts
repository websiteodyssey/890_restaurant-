// Genere par build_zoom.py : image de la carte -> version agrandie pour la visionneuse.
export const ZOOM: Record<string, string> = {
  "/images/menu/moutai-feitian.jpg": "/images/menu/zoom/moutai-feitian.jpg",
  "/images/menu/moutai-golden.jpg": "/images/menu/zoom/moutai-golden.jpg",
  "/images/menu/ody/ciboulette.jpg": "/images/menu/zoom/ciboulette.jpg",
};
export const zoomSrc = (src: string) => ZOOM[src] ?? src;
