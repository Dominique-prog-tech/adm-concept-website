// Vertaal-strings voor gedeelde UI-componenten (Header, Footer, CTA, ProductCard).
// Lange pagina-content staat in afzonderlijke .astro-bestanden per taal.

export const languages = {
  nl: "Nederlands",
  fr: "Français",
} as const;

export const defaultLang = "nl" as const;

export type Lang = keyof typeof languages;

export const ui = {
  nl: {
    // Header navigation
    "nav.products": "Producten",
    "nav.services": "Diensten",
    "nav.blog": "Blog",
    "nav.about": "Over ons",
    "nav.contact": "Contact",
    "nav.requestQuote": "Vraag offerte",
    "nav.openMenu": "Menu openen",

    // Footer
    "footer.productsHeading": "Producten",
    "footer.contactHeading": "Contact",
    "footer.customDev": "Maatwerk op aanvraag",
    "footer.blog": "Blog",
    "footer.tagline":
      "Maatwerksoftware en digitale platformen voor bedrijven die efficiënter willen werken. 25+ jaar ervaring in het vertalen van bedrijfsprocessen naar gebruiksvriendelijke software.",
    "footer.copyright": "Alle rechten voorbehouden.",
    "footer.privacy": "Privacy",

    // CTA defaults
    "cta.defaultTitle": "Klaar om uw bedrijfsproces te digitaliseren?",
    "cta.defaultDescription":
      "Geen verkooppraatje. Een eerlijk gesprek over wat uw bedrijf nodig heeft en hoe we daar samen kunnen geraken.",
    "cta.defaultButton": "Plan een gesprek",

    // ProductCard
    "product.moreInfo": "Meer info",
    "product.documentation": "Documentatie",

    // Hero
    "hero.badge": "Meer dan 25 jaar ervaring in maatwerksoftware",
    "hero.headlineLine1": "Uw digitale partner,",
    "hero.headlineLine2": "op maat van uw bedrijf.",
    "hero.subheadline":
      "Maatwerksoftware en digitale platformen die uw bedrijfsprocessen vertalen naar efficiëntie. Geen standaardpakketten — wel oplossingen die werken zoals uw organisatie werkt.",
    "hero.ctaPrimary": "Plan een gesprek",
    "hero.ctaSecondary": "Bekijk onze producten",
    "hero.stat1Label": "Jaar ervaring",
    "hero.stat2Label": "Eigen platforms",
    "hero.stat3Label": "Maatwerkprojecten",
    "hero.stat4Label": "Made in Belgium",

    // DashboardMockup
    "mockup.dossiersApproved": "Dossiers goedgekeurd",
    "mockup.revenueMonth": "Omzet deze maand",
    "mockup.new": "Nieuw",

    // Routes (URL paths)
    "route.home": "/",
    "route.products": "/producten",
    "route.services": "/diensten",
    "route.about": "/over-ons",
    "route.contact": "/contact",
    "route.support": "/support",
    "route.privacy": "/privacy",
    "route.blog": "/blog",

    // Language switcher
    "lang.switch": "FR",
    "lang.label": "Taal wijzigen",
  },
  fr: {
    "nav.products": "Produits",
    "nav.services": "Services",
    "nav.blog": "Blog",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "nav.requestQuote": "Demander un devis",
    "nav.openMenu": "Ouvrir le menu",

    "footer.productsHeading": "Produits",
    "footer.contactHeading": "Contact",
    "footer.customDev": "Sur mesure sur demande",
    "footer.blog": "Blog",
    "footer.tagline":
      "Logiciels sur mesure et plateformes numériques pour les entreprises qui veulent travailler plus efficacement. Plus de 25 ans d'expérience dans la traduction des processus métier en logiciels conviviaux.",
    "footer.copyright": "Tous droits réservés.",
    "footer.privacy": "Confidentialité",

    "cta.defaultTitle": "Prêt à digitaliser vos processus métier ?",
    "cta.defaultDescription":
      "Pas de discours commercial. Un échange honnête sur les besoins de votre entreprise et comment nous pouvons y parvenir ensemble.",
    "cta.defaultButton": "Planifier un entretien",

    "product.moreInfo": "Plus d'infos",
    "product.documentation": "Documentation",

    "hero.badge": "Plus de 25 ans d'expérience en logiciels sur mesure",
    "hero.headlineLine1": "Votre partenaire numérique,",
    "hero.headlineLine2": "sur mesure pour votre entreprise.",
    "hero.subheadline":
      "Logiciels sur mesure et plateformes numériques qui transforment vos processus métier en efficacité. Pas de solutions standardisées — des solutions qui fonctionnent comme votre organisation.",
    "hero.ctaPrimary": "Planifier un entretien",
    "hero.ctaSecondary": "Découvrir nos produits",
    "hero.stat1Label": "Ans d'expérience",
    "hero.stat2Label": "Plateformes propres",
    "hero.stat3Label": "Projets sur mesure",
    "hero.stat4Label": "Made in Belgium",

    "mockup.dossiersApproved": "Dossiers approuvés",
    "mockup.revenueMonth": "Chiffre d'affaires du mois",
    "mockup.new": "Nouveau",

    "route.home": "/fr/",
    "route.products": "/fr/produits",
    "route.services": "/fr/services",
    "route.about": "/fr/a-propos",
    "route.contact": "/fr/contact",
    "route.support": "/fr/support",
    "route.privacy": "/fr/confidentialite",
    "route.blog": "/fr/blog",

    "lang.switch": "NL",
    "lang.label": "Changer de langue",
  },
} as const;

/** Detecteer taal uit Astro.url.pathname */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

/** Verkrijg een vertaalfunctie voor de gegeven taal */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

/** Verkrijg het URL-pad in de andere taal voor een language switcher */
export function getAlternateLanguagePath(currentPath: string, currentLang: Lang): string {
  const targetLang: Lang = currentLang === "nl" ? "fr" : "nl";

  // Mapping van NL-paden naar FR-paden en omgekeerd
  const pathMap: Record<string, Record<Lang, string>> = {
    "/": { nl: "/", fr: "/fr/" },
    "/producten": { nl: "/producten", fr: "/fr/produits" },
    "/producten/": { nl: "/producten/", fr: "/fr/produits/" },
    "/producten/creditsoft": { nl: "/producten/creditsoft", fr: "/fr/produits/creditsoft" },
    "/producten/cleanops": { nl: "/producten/cleanops", fr: "/fr/produits/cleanops" },
    "/producten/nimble": { nl: "/producten/nimble", fr: "/fr/produits/nimble" },
    "/diensten": { nl: "/diensten", fr: "/fr/services" },
    "/over-ons": { nl: "/over-ons", fr: "/fr/a-propos" },
    "/contact": { nl: "/contact", fr: "/fr/contact" },
    "/support": { nl: "/support", fr: "/fr/support" },
    "/privacy": { nl: "/privacy", fr: "/fr/confidentialite" },
    "/blog": { nl: "/blog", fr: "/fr/blog" },
  };

  // Normaliseer huidige path (strip /fr/ prefix indien aanwezig)
  let normalizedPath = currentPath;
  if (currentLang === "fr") {
    // FR -> NL: vind welke NL-route bij deze FR-route hoort
    for (const [nlPath, paths] of Object.entries(pathMap)) {
      if (paths.fr === currentPath || paths.fr === currentPath.replace(/\/$/, "")) {
        return paths.nl;
      }
    }
    // Fallback: strip /fr prefix
    return currentPath.replace(/^\/fr/, "") || "/";
  }

  // NL -> FR: gebruik mapping
  const stripped = currentPath.replace(/\/$/, "") || "/";
  if (pathMap[stripped]) {
    return pathMap[stripped].fr;
  }
  if (pathMap[currentPath]) {
    return pathMap[currentPath].fr;
  }

  // Fallback: prepend /fr
  return `/fr${currentPath}`;
}
