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

    // Clients section
    "clients.badge": "Onze klanten",
    "clients.heading": "Succesvolle samenwerkingen",
    "clients.intro":
      "Een greep uit de bedrijven die we sinds jaren ondersteunen met maatwerksoftware en onze platformen. Van kredietbemiddeling tot verzekeringen en projectmatige verhuur.",
    "clients.visitWebsite": "Bezoek website",
    "clients.eurofinco": "Kredietbeheer en documentautomatisatie voor een toonaangevende speler in kredietbemiddeling.",
    "clients.cares": "Platform voor backoffice en portaalbeheer voor tussenpersonen, met geïntegreerde commissieberekening.",
    "clients.hypotheekwereld": "Centrale administratie voor een groepering van kredietmakelaars, met dossierbeheer en bankcommunicatie.",
    "clients.tentmoment": "Projectbeheer en planning voor verhuur, inclusief facturatie en internationale uitbreiding.",

    // CreditSoftMockup
    "cs.loaRunning": "LOA's lopend",
    "cs.loaExpiring": "3 vervallen binnen 7d",
    "cs.commissionsMonth": "Commissies mei",
    "cs.urlPath": "creditsoft.be / dossiers",
    "cs.heading": "Kredietdossiers",
    "cs.activeFiles": "47 actieve dossiers",
    "cs.newFile": "+ Nieuw dossier",
    "cs.tabAll": "Alle (47)",
    "cs.tabInProgress": "In afwerking (12)",
    "cs.tabSubmitted": "Ingediend (8)",
    "cs.tabApproved": "Goedgekeurd (27)",
    "cs.statusApproved": "Goedgekeurd",
    "cs.statusInProgress": "In afwerking",
    "cs.statusSubmitted": "Ingediend",
    "cs.client1": "Janssens & Partners",
    "cs.client2": "De Smedt nv",
    "cs.client3": "Verhaegen bv",
    "cs.client4": "Bouwbedrijf Maes",

    // CleanOpsMockup
    "co.certificatesOk": "Attesten conform",
    "co.thisMonth": "deze maand",
    "co.routeTeam": "Route ploeg A",
    "co.tasks8": "8 opdrachten",
    "co.urlPath": "cleanops.eu / planning",
    "co.heading": "Planning week 22",
    "co.dateRange": "26 mei — 30 mei 2026",
    "co.day1": "Ma 26",
    "co.day2": "Di 27",
    "co.day3": "Wo 28",
    "co.day4": "Do 29",
    "co.day5": "Vr 30",
    "co.client1": "Residentie Zonnehof",
    "co.client2": "Kantoor De Brug",
    "co.client3": "Industriepark Noord",
    "co.client4": "Restaurant Bellini",
    "co.city1": "Gent",
    "co.city2": "Brugge",
    "co.city3": "Antwerpen",
    "co.city4": "Mechelen",

    // NimbleMockup
    "nb.progressState": "Vorderingsstaat #VS-2026-08",
    "nb.approved": "✓ Goedgekeurd",
    "nb.byClient": "door klant",
    "nb.hoursWeek": "Uren deze week",
    "nb.teamAlpha": "Ploeg Alpha",
    "nb.hoursShort": "187u",
    "nb.urlPath": "nimble-erp.eu / projecten",
    "nb.heading": "Lopende projecten",
    "nb.subheading": "12 actief · 3 in oplevering",
    "nb.newProject": "+ Nieuw project",
    "nb.statusExecution": "Uitvoering",
    "nb.statusDelivery": "Oplevering",
    "nb.project1": "Nieuwbouw Residentie Park",
    "nb.project2": "Renovatie kantoor De Smet",
    "nb.project3": "Installatie HVAC project Noord",
    "nb.client1": "Bouwgroep Verstraete",
    "nb.client2": "De Smet & Co",
    "nb.client3": "Industrie Noord",

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

    "clients.badge": "Nos clients",
    "clients.heading": "Collaborations réussies",
    "clients.intro":
      "Un aperçu des entreprises que nous accompagnons depuis des années avec des logiciels sur mesure et nos plateformes. De l'intermédiation en crédit aux assurances et à la location événementielle.",
    "clients.visitWebsite": "Visiter le site",
    "clients.eurofinco": "Gestion des crédits et automatisation documentaire pour un acteur de référence en intermédiation de crédit.",
    "clients.cares": "Plateforme back-office et portail pour intermédiaires, avec calcul des commissions intégré.",
    "clients.hypotheekwereld": "Administration centralisée pour un groupement de courtiers en crédit, avec gestion des dossiers et communication bancaire.",
    "clients.tentmoment": "Gestion de projet et planning pour la location, facturation incluse et expansion internationale.",

    "cs.loaRunning": "LOA en cours",
    "cs.loaExpiring": "3 expirent sous 7j",
    "cs.commissionsMonth": "Commissions mai",
    "cs.urlPath": "creditsoft.be / dossiers",
    "cs.heading": "Dossiers de crédit",
    "cs.activeFiles": "47 dossiers actifs",
    "cs.newFile": "+ Nouveau dossier",
    "cs.tabAll": "Tous (47)",
    "cs.tabInProgress": "En traitement (12)",
    "cs.tabSubmitted": "Soumis (8)",
    "cs.tabApproved": "Approuvés (27)",
    "cs.statusApproved": "Approuvé",
    "cs.statusInProgress": "En traitement",
    "cs.statusSubmitted": "Soumis",
    "cs.client1": "Janssens & Partners",
    "cs.client2": "De Smedt SA",
    "cs.client3": "Verhaegen SRL",
    "cs.client4": "Entreprise Maes",

    "co.certificatesOk": "Attestations conformes",
    "co.thisMonth": "ce mois-ci",
    "co.routeTeam": "Itinéraire équipe A",
    "co.tasks8": "8 missions",
    "co.urlPath": "cleanops.eu / planning",
    "co.heading": "Planning semaine 22",
    "co.dateRange": "26 mai — 30 mai 2026",
    "co.day1": "Lu 26",
    "co.day2": "Ma 27",
    "co.day3": "Me 28",
    "co.day4": "Je 29",
    "co.day5": "Ve 30",
    "co.client1": "Résidence Zonnehof",
    "co.client2": "Bureau De Brug",
    "co.client3": "Parc industriel Nord",
    "co.client4": "Restaurant Bellini",
    "co.city1": "Gand",
    "co.city2": "Bruges",
    "co.city3": "Anvers",
    "co.city4": "Malines",

    "nb.progressState": "État d'avancement #EA-2026-08",
    "nb.approved": "✓ Approuvé",
    "nb.byClient": "par le client",
    "nb.hoursWeek": "Heures cette semaine",
    "nb.teamAlpha": "Équipe Alpha",
    "nb.hoursShort": "187 h",
    "nb.urlPath": "nimble-erp.eu / projets",
    "nb.heading": "Projets en cours",
    "nb.subheading": "12 actifs · 3 en livraison",
    "nb.newProject": "+ Nouveau projet",
    "nb.statusExecution": "Exécution",
    "nb.statusDelivery": "Livraison",
    "nb.project1": "Construction Résidence Park",
    "nb.project2": "Rénovation bureaux De Smet",
    "nb.project3": "Installation HVAC projet Nord",
    "nb.client1": "Groupe Verstraete",
    "nb.client2": "De Smet & Co",
    "nb.client3": "Industrie Nord",

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
    "/contact/bedankt": { nl: "/contact/bedankt", fr: "/fr/contact/merci" },
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
