import type { Dish, MenuCategory } from "../data/menu";
import type { Lang } from "./ui";

// Nom du plat selon la langue (zh → chinois, en → anglais, fr → français)
export function dishName(d: Dish, lang: Lang): string {
  if (lang === "zh") return d.cn || d.name;
  if (lang === "en") return d.en || d.name;
  return d.name;
}

// Sous-titre chinois affiché à côté du nom — uniquement en FR/EN (en ZH le nom EST déjà le chinois)
export function dishCn(d: Dish, lang: Lang): string | undefined {
  return lang === "zh" ? undefined : d.cn;
}

// Titre de catégorie selon la langue
export function catTitle(c: MenuCategory, lang: Lang): string {
  if (lang === "zh") return c.cn || c.title;
  if (lang === "en") return c.titleEn || c.title;
  return c.title;
}

export function catNote(c: MenuCategory, lang: Lang): string | undefined {
  if (lang === "en") return c.noteEn || c.note;
  return c.note; // fr + zh : note FR par défaut (les notes ZH ne sont pas fournies)
}
