// Traductions de toute l'interface du site — FR / EN / ZH.
// Le menu (plats) est traduit séparément dans data/menu.ts (champ `en`, `cn`).

export type Lang = "fr" | "en" | "zh";

export const LANGS: { code: Lang; label: string; full: string }[] = [
  { code: "fr", label: "FR", full: "Français" },
  { code: "en", label: "EN", full: "English" },
  { code: "zh", label: "中", full: "中文" },
];

type Strings = {
  nav: { accueil: string; histoire: string; carte: string; galerie: string; contact: string; menu: string; fermer: string };
  cta: { order: string; reserve: string; reserveTable: string };
  info: { tagline: string; cuisine: string; welcome: string; welcome2: string; ambiance: string; chef: string; promise: string; concept: string };
  hero: { sub: string };
  home: {
    introTitle: string; introBtn: string;
    sigEyebrow: string; sigTitle: string; sigIntro: string; seeMenu: string;
    apercuEyebrow: string; apercuTitle: string; apercuIntro: string;
    tarifsEyebrow: string; tarifsTitle: string; tarifsIntro: string;
    mapEyebrow: string; mapTitle: string;
    labelAddress: string; labelPhone: string; labelHours: string; labelClosed: string;
    hoursValue: string; closedValue: string; route: string; details: string;
    bandEyebrow: string; bandTitle: string; bandText: string; bookOnline: string;
  };
  histoire: {
    title: string; cn: string; intro: string;
    chefEyebrow: string; chefTitle: string; badge: string;
    valuesEyebrow: string; valuesTitle: string;
    values: { t: string; d: string }[];
    ambianceEyebrow: string; ambianceTitle: string; seeGallery: string;
  };
  galerie: {
    eyebrow: string; title: string; cn: string; intro: string;
    sectionEyebrow: string; sectionTitle: string; sectionIntro: string;
  };
  contact: {
    eyebrow: string; title: string; cn: string; intro: string;
    address: string; phone: string; hours: string; follow: string;
    hoursText: string; delivery: string; route: string;
  };
  carte: { title: string; cn: string; intro: string; spiceLegend: string; vegLegend: string };
  slides: { title: string; desc: string }[];
  footer: { restaurant: string; contact: string; delivery: string; plan: string; reserve: string; order: string; copyright: string; hoursLine: string };
  notFound: { title: string; intro: string; back: string };
};

export const UI: Record<Lang, Strings> = {
  fr: {
    nav: { accueil: "Accueil", histoire: "L'histoire", carte: "La carte", galerie: "Galerie", contact: "Contact", menu: "Menu", fermer: "Fermer" },
    cta: { order: "Commander", reserve: "Réserver", reserveTable: "Réserver une table" },
    info: {
      tagline: "L'âme de la véritable cuisine du Sichuan",
      cuisine: "Cuisine sichuanaise authentique & grillades",
      welcome: "Découvrez l'authenticité de la cuisine chinoise, un voyage culinaire entre tradition et raffinement.",
      welcome2: "Des plats préparés à la minute, des recettes transmises de génération en génération : le vrai goût de la Chine vous attend.",
      ambiance: "Entre tradition et modernité. Dans un cadre rétro et chaleureux aux accents des années 80-90, profitez d'une atmosphère conviviale, idéale pour partager un moment unique.",
      chef: "Sous la direction d'un chef maître certifié, originaire de Chengdu et fort de 20 ans d'expérience, nous utilisons exclusivement des poivres et piments du Sichuan, importés et sélectionnés avec soin. Chaque plat est cuisiné à la commande, à partir d'ingrédients frais et de recettes traditionnelles.",
      promise: "Une expérience authentique du Sichuan, un service attentionné et personnalisé, dans une atmosphère chaleureuse au cœur du 11ᵉ arrondissement.",
      concept: "Le goût des années 80-90",
    },
    hero: { sub: "Cuisine sichuanaise authentique & grillades — saveurs mala et poivre du Sichuan, cuisinés à la commande par un maître de Chengdu. Paris 11ᵉ." },
    home: {
      introTitle: "Le vrai goût de la Chine", introBtn: "Notre histoire",
      sigEyebrow: "Nos incontournables", sigTitle: "Plats signature", sigIntro: "Préparés à la minute, dans la grande tradition mala du Sichuan.", seeMenu: "Voir toute la carte",
      apercuEyebrow: "À découvrir", apercuTitle: "En images", apercuIntro: "Un aperçu de nos plats signature et de l'atmosphère du 890.",
      tarifsEyebrow: "Nos prix", tarifsTitle: "Quelques plats & tarifs", tarifsIntro: "Une sélection de la carte. Plats généreux, pensés pour être partagés.",
      mapEyebrow: "Nous trouver", mapTitle: "Venez nous voir",
      labelAddress: "Adresse", labelPhone: "Téléphone", labelHours: "Horaires", labelClosed: "Fermeture",
      hoursValue: "12h–14h30 · 18h30–22h30", closedValue: "Le jeudi", route: "Itinéraire", details: "Détails & accès",
      bandEyebrow: "Une table vous attend", bandTitle: "Réservez votre moment au 890", bandText: "Déjeuner, dîner, repas de groupe ou événement privé — réservez en quelques secondes ou appelez-nous au", bookOnline: "Réserver en ligne",
    },
    histoire: {
      title: "L'histoire du 890", cn: "扒玖零", intro: "Le vrai goût de la Chine, entre tradition sichuanaise et nostalgie des années 80-90 — au 40 rue Alexandre Dumas.",
      chefEyebrow: "Le chef", chefTitle: "Un maître de Chengdu", badge: "ans d'expérience à Chengdu",
      valuesEyebrow: "Notre signature", valuesTitle: "Ce qui fait le 890",
      values: [
        { t: "Poivre & piment du Sichuan", d: "Importés et sélectionnés avec soin pour la véritable saveur mala." },
        { t: "Cuisiné à la commande", d: "Chaque plat est préparé minute, à partir d'ingrédients frais." },
        { t: "Recettes traditionnelles", d: "Le savoir-faire d'un maître certifié, transmis depuis Chengdu." },
        { t: "Une ambiance authentique", d: "Une salle chaleureuse aux accents rétro chinois, au cœur du 11ᵉ." },
      ],
      ambianceEyebrow: "L'atmosphère", ambianceTitle: "Le décor des années 80-90", seeGallery: "Voir la galerie",
    },
    galerie: {
      eyebrow: "Galerie", title: "En images", cn: "相册", intro: "L'ambiance, les saveurs et l'esprit du 890 — entre tradition sichuanaise et décor rétro chinois.",
      sectionEyebrow: "Notre univers en images", sectionTitle: "Le 890 en images", sectionIntro: "Survolez pour mettre en pause — cliquez sur une photo pour l'agrandir.",
    },
    contact: {
      eyebrow: "Nous trouver", title: "Nous rendre visite", cn: "联系我们", intro: "Au cœur du 11ᵉ, à deux pas du métro Alexandre Dumas.",
      address: "Adresse", phone: "Téléphone", hours: "Horaires", follow: "Suivez-nous",
      hoursText: "Tous les jours sauf jeudi", delivery: "Livraison", route: "Itinéraire",
    },
    carte: { title: "Menu du 890", cn: "菜单", intro: "Une explosion de saveurs fraîches et épicées. Plats à partager, dans la plus pure tradition sichuanaise.", spiceLegend: "niveau de piment", vegLegend: "végétarien" },
    slides: [
      { title: "Bar grillé de Chongqing", desc: "Bar entier grillé, bouillon mala, piments et ciboule." },
      { title: "Poulet au taro et boyaux de porc", desc: "Poulet mijoté, taro fondant et boyaux de porc, piments et poivre du Sichuan." },
      { title: "Un intérieur chaleureux", desc: "Lampes douces, brique et bois — l'atmosphère conviviale du 890." },
      { title: "Une salle aux accents rétro", desc: "Le décor chaleureux, entre fresque et brique, des années 80-90." },
      { title: "Poisson à la choucroute", desc: "Bouillon épicé, chou fermenté et poisson frais — un classique du Sichuan." },
      { title: "Poulet aux cacahuètes", desc: "Croquant, parfumé et légèrement piquant — le Gong Bao Ji Ding." },
      { title: "Marmite épicée sichuanaise", desc: "Wok sec de viandes et légumes, piments et poivre du Sichuan." },
      { title: "Émincé de bœuf aux oignons", desc: "Bœuf grillé sur plaque brûlante, oignons et poivrons." },
      { title: "Une tablée généreuse", desc: "Plats à partager, convivialité et générosité — l'esprit des tables du 890." },
      { title: "Piments et ail", desc: "Les saveurs du Sichuan jusque dans le décor — piments séchés et ail tressé." },
    ],
    footer: { restaurant: "Le restaurant", contact: "Contact", delivery: "Livraison", plan: "Plan d'accès", reserve: "Réserver", order: "Commander", copyright: "© 2024 890 Restaurant · Cuisine sichuanaise · Paris 11e", hoursLine: "Ouvert tous les jours sauf le jeudi · 12h–14h30 · 18h30–22h30" },
    notFound: { title: "Page introuvable", intro: "Cette page n'existe pas — mais une bonne table vous attend.", back: "Retour à l'accueil" },
  },

  en: {
    nav: { accueil: "Home", histoire: "Our story", carte: "Menu", galerie: "Gallery", contact: "Contact", menu: "Menu", fermer: "Close" },
    cta: { order: "Order", reserve: "Book", reserveTable: "Book a table" },
    info: {
      tagline: "The soul of authentic Sichuan cuisine",
      cuisine: "Authentic Sichuan cuisine & grills",
      welcome: "Discover the authenticity of Chinese cuisine — a culinary journey between tradition and refinement.",
      welcome2: "Dishes cooked to order, recipes passed down through generations: the true taste of China awaits you.",
      ambiance: "Between tradition and modernity. In a warm, retro setting inspired by the 80s and 90s, enjoy a friendly atmosphere — perfect for sharing a special moment.",
      chef: "Led by a certified master chef from Chengdu with 20 years of experience, we use only carefully selected Sichuan peppers and chillies. Every dish is cooked to order from fresh ingredients and traditional recipes.",
      promise: "An authentic taste of Sichuan, attentive and personal service, in a warm atmosphere in the heart of the 11th arrondissement.",
      concept: "The taste of the 80s & 90s",
    },
    hero: { sub: "Authentic Sichuan cuisine & grills — mala flavours and Sichuan pepper, cooked to order by a master chef from Chengdu. Paris 11th." },
    home: {
      introTitle: "The true taste of China", introBtn: "Our story",
      sigEyebrow: "Our must-tries", sigTitle: "Signature dishes", sigIntro: "Cooked to order, in the great mala tradition of Sichuan.", seeMenu: "See the full menu",
      apercuEyebrow: "Discover", apercuTitle: "In pictures", apercuIntro: "A glimpse of our signature dishes and the atmosphere of 890.",
      tarifsEyebrow: "Our prices", tarifsTitle: "A few dishes & prices", tarifsIntro: "A selection from the menu. Generous dishes, made to be shared.",
      mapEyebrow: "Find us", mapTitle: "Come and see us",
      labelAddress: "Address", labelPhone: "Phone", labelHours: "Hours", labelClosed: "Closed",
      hoursValue: "12pm–2:30pm · 6:30pm–10:30pm", closedValue: "Thursdays", route: "Directions", details: "Details & access",
      bandEyebrow: "A table awaits you", bandTitle: "Book your moment at 890", bandText: "Lunch, dinner, group meal or private event — book in seconds or call us at", bookOnline: "Book online",
    },
    histoire: {
      title: "The story of 890", cn: "扒玖零", intro: "The true taste of China — between Sichuan tradition and 80s-90s nostalgia, at 40 rue Alexandre Dumas.",
      chefEyebrow: "The chef", chefTitle: "A master from Chengdu", badge: "years of experience in Chengdu",
      valuesEyebrow: "Our signature", valuesTitle: "What makes 890",
      values: [
        { t: "Sichuan pepper & chilli", d: "Imported and carefully selected for the true mala flavour." },
        { t: "Cooked to order", d: "Every dish is made fresh, from fresh ingredients." },
        { t: "Traditional recipes", d: "The know-how of a certified master, passed down from Chengdu." },
        { t: "An authentic atmosphere", d: "A warm dining room with retro Chinese accents, in the heart of the 11th." },
      ],
      ambianceEyebrow: "The atmosphere", ambianceTitle: "An 80s-90s setting", seeGallery: "See the gallery",
    },
    galerie: {
      eyebrow: "Gallery", title: "In pictures", cn: "相册", intro: "The atmosphere, flavours and spirit of 890 — between Sichuan tradition and retro Chinese decor.",
      sectionEyebrow: "Our world in pictures", sectionTitle: "890 in pictures", sectionIntro: "Hover to pause — click a photo to enlarge it.",
    },
    contact: {
      eyebrow: "Find us", title: "Come visit us", cn: "联系我们", intro: "In the heart of the 11th, steps from Alexandre Dumas metro station.",
      address: "Address", phone: "Phone", hours: "Hours", follow: "Follow us",
      hoursText: "Every day except Thursday", delivery: "Delivery", route: "Directions",
    },
    carte: { title: "890 Menu", cn: "菜单", intro: "An explosion of fresh, spicy flavours. Dishes to share, in the purest Sichuan tradition.", spiceLegend: "spice level", vegLegend: "vegetarian" },
    slides: [
      { title: "Chongqing grilled sea bass", desc: "Whole grilled sea bass, mala broth, chillies and spring onion." },
      { title: "Chicken with taro & pork intestine", desc: "Simmered chicken, soft taro and pork intestine, chillies and Sichuan pepper." },
      { title: "A cosy interior", desc: "Soft lights, brick and wood — the friendly atmosphere of 890." },
      { title: "A retro-styled dining room", desc: "Warm decor, between mural and brick, of the 80s and 90s." },
      { title: "Fish with pickled cabbage", desc: "Spicy broth, fermented cabbage and fresh fish — a Sichuan classic." },
      { title: "Kung pao chicken", desc: "Crispy, fragrant and lightly spicy — Gong Bao Ji Ding." },
      { title: "Sichuan spicy dry pot", desc: "Dry-pot of meats and vegetables, chillies and Sichuan pepper." },
      { title: "Sizzling beef with onions", desc: "Beef seared on a hot iron plate, onions and peppers." },
      { title: "A generous feast", desc: "Dishes to share, warmth and generosity — the spirit of dining at 890." },
      { title: "Chillies and garlic", desc: "Sichuan flavours down to the decor — dried chillies and braided garlic." },
    ],
    footer: { restaurant: "The restaurant", contact: "Contact", delivery: "Delivery", plan: "Directions", reserve: "Book", order: "Order", copyright: "© 2024 890 Restaurant · Sichuan cuisine · Paris 11", hoursLine: "Open every day except Thursday · 12pm–2:30pm · 6:30pm–10:30pm" },
    notFound: { title: "Page not found", intro: "This page doesn't exist — but a great table awaits you.", back: "Back to home" },
  },

  zh: {
    nav: { accueil: "首页", histoire: "我们的故事", carte: "菜单", galerie: "相册", contact: "联系我们", menu: "菜单", fermer: "关闭" },
    cta: { order: "点餐", reserve: "订位", reserveTable: "预订餐位" },
    info: {
      tagline: "正宗川菜之魂",
      cuisine: "正宗川菜与烧烤",
      welcome: "探索地道的中华美食，一段融合传统与精致的味觉之旅。",
      welcome2: "现点现做，世代相传的食谱：正宗的中国味道在此等候。",
      ambiance: "传统与现代交融。在充满八九十年代复古氛围的温馨空间里，享受亲切热闹的气氛，与亲友共度难忘时光。",
      chef: "由来自成都、拥有二十年经验的认证名厨主理，我们只选用精心挑选的四川花椒与辣椒。每道菜都以新鲜食材、传统做法现点现做。",
      promise: "地道的四川风味，贴心而专属的服务，在巴黎十一区中心的温馨氛围中。",
      concept: "八九十年代的味道",
    },
    hero: { sub: "正宗川菜与烧烤 —— 麻辣风味与四川花椒，由成都名厨现点现做。巴黎十一区。" },
    home: {
      introTitle: "正宗的中国味道", introBtn: "我们的故事",
      sigEyebrow: "必点推荐", sigTitle: "招牌菜", sigIntro: "现点现做，传承四川麻辣的精髓。", seeMenu: "查看完整菜单",
      apercuEyebrow: "一探究竟", apercuTitle: "照片集", apercuIntro: "一窥我们的招牌菜与 890 的氛围。",
      tarifsEyebrow: "价格", tarifsTitle: "部分菜品与价格", tarifsIntro: "菜单精选。分量十足，适合分享。",
      mapEyebrow: "找到我们", mapTitle: "欢迎光临",
      labelAddress: "地址", labelPhone: "电话", labelHours: "营业时间", labelClosed: "休息日",
      hoursValue: "12:00–14:30 · 18:30–22:30", closedValue: "每周四", route: "导航", details: "详情与到达方式",
      bandEyebrow: "餐位为您预留", bandTitle: "在 890 预订您的时光", bandText: "午餐、晚餐、聚会或私人活动 —— 几秒即可预订，或致电我们", bookOnline: "在线预订",
    },
    histoire: {
      title: "890 的故事", cn: "扒玖零", intro: "正宗的中国味道 —— 四川传统与八九十年代怀旧的交融，地址：40 rue Alexandre Dumas。",
      chefEyebrow: "主厨", chefTitle: "来自成都的名厨", badge: "年成都经验",
      valuesEyebrow: "我们的特色", valuesTitle: "890 的与众不同",
      values: [
        { t: "四川花椒与辣椒", d: "精心进口与挑选，呈现真正的麻辣风味。" },
        { t: "现点现做", d: "每道菜均以新鲜食材现做。" },
        { t: "传统食谱", d: "认证名厨的手艺，自成都代代相传。" },
        { t: "地道的氛围", d: "充满中式复古韵味的温馨餐厅，位于十一区中心。" },
      ],
      ambianceEyebrow: "氛围", ambianceTitle: "八九十年代的装潢", seeGallery: "查看相册",
    },
    galerie: {
      eyebrow: "相册", title: "照片集", cn: "相册", intro: "890 的氛围、风味与精神 —— 四川传统与中式复古装潢的交融。",
      sectionEyebrow: "影像中的我们", sectionTitle: "影像中的 890", sectionIntro: "悬停暂停 —— 点击照片可放大。",
    },
    contact: {
      eyebrow: "找到我们", title: "欢迎来访", cn: "联系我们", intro: "位于十一区中心，紧邻 Alexandre Dumas 地铁站。",
      address: "地址", phone: "电话", hours: "营业时间", follow: "关注我们",
      hoursText: "每天营业，周四除外", delivery: "外送", route: "导航",
    },
    carte: { title: "890 菜单", cn: "菜单", intro: "新鲜麻辣，风味爆发。适合分享的菜品，呈现最纯正的川味传统。", spiceLegend: "辣度", vegLegend: "素食" },
    slides: [
      { title: "重庆烤鲈鱼", desc: "整条烤鲈鱼，麻辣汤底，辣椒与葱花。" },
      { title: "芋儿肥肠鸡", desc: "焖煮鸡肉、芋头与肥肠，辣椒与四川花椒。" },
      { title: "温馨的内饰", desc: "柔和灯光、砖墙与木质 —— 890 的亲切氛围。" },
      { title: "复古风格的餐厅", desc: "温馨装潢，壁画与砖墙之间，重现八九十年代。" },
      { title: "酸菜鱼", desc: "麻辣汤底、酸菜与鲜鱼 —— 川菜经典。" },
      { title: "宫保鸡丁", desc: "酥脆喷香，微辣经典。" },
      { title: "麻辣香锅", desc: "干锅荤素，辣椒与花椒 —— 麻辣鲜香。" },
      { title: "铁板牛肉", desc: "铁板现煎牛肉，洋葱与彩椒，滋滋作响。" },
      { title: "丰盛的餐桌", desc: "适合分享的菜品，热闹而慷慨 —— 890 的餐桌精神。" },
      { title: "辣椒与蒜", desc: "川味融入装饰 —— 红辣椒与蒜辫。" },
    ],
    footer: { restaurant: "餐厅", contact: "联系", delivery: "外送", plan: "到达方式", reserve: "订位", order: "点餐", copyright: "© 2024 890 Restaurant · 川菜 · 巴黎十一区", hoursLine: "每天营业，周四除外 · 12:00–14:30 · 18:30–22:30" },
    notFound: { title: "页面未找到", intro: "此页面不存在 —— 但一桌好菜正等着您。", back: "返回首页" },
  },
};
