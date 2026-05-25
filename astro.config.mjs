// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://www.adm-concept.be';

// Asymmetrische NL <-> FR slug-paren: pagina's waar de NL- en FR-slug
// verschillen. Voor symmetrische paden (bv. /blog/X <-> /fr/blog/X)
// regelt @astrojs/sitemap de hreflang-alternates automatisch — die
// staan hier dus NIET in. Path-prefixen die op "/" eindigen worden ook
// gebruikt voor sub-slugs (bv. /realisaties/cares-assistance/ ->
// /fr/realisations/cares-assistance/).
const NL_TO_FR = {
  '/producten/': '/fr/produits/',
  '/diensten/': '/fr/services/',
  '/werkwijze/': '/fr/notre-approche/',
  '/realisaties/': '/fr/realisations/',
  '/over-ons/': '/fr/a-propos/',
  '/contact/bedankt/': '/fr/contact/merci/',
  '/privacy/': '/fr/confidentialite/',
};
const FR_TO_NL = Object.fromEntries(
  Object.entries(NL_TO_FR).map(([nl, fr]) => [fr, nl]),
);

function findAlternates(pathname) {
  // Exact match NL -> FR
  for (const [nl, fr] of Object.entries(NL_TO_FR)) {
    if (pathname === nl) return { nl, fr };
    if (nl.endsWith('/') && pathname.startsWith(nl) && pathname !== nl) {
      const rest = pathname.slice(nl.length);
      return { nl: pathname, fr: fr + rest };
    }
  }
  // Exact match FR -> NL
  for (const [fr, nl] of Object.entries(FR_TO_NL)) {
    if (pathname === fr) return { nl, fr };
    if (fr.endsWith('/') && pathname.startsWith(fr) && pathname !== fr) {
      const rest = pathname.slice(fr.length);
      return { nl: nl + rest, fr: pathname };
    }
  }
  return null;
}

export default defineConfig({
  site: SITE,
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'nl',
        locales: {
          nl: 'nl-BE',
          fr: 'fr-BE',
        },
      },
      serialize(item) {
        try {
          const url = new URL(item.url);
          const alts = findAlternates(url.pathname);
          if (alts) {
            item.links = [
              { url: SITE + alts.nl, lang: 'nl-BE' },
              { url: SITE + alts.fr, lang: 'fr-BE' },
            ];
          }
        } catch {
          // ignore parse errors, keep default item
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
