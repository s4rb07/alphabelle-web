// Service catalog — SEO slug ↔ 1-based index map.
// Shared by the home grid, the /services page, the per-service detail pages
// and the sitemap. Index is 1-based to match the message keys (full1..full6,
// descripcion1..6, items1..6) and the photo files s1.jpg..s6.jpg.

export const SERVICE_SLUGS = [
	"weight-loss",
	"hormone-optimization",
	"wellness-injections",
	"injectables-prp",
	"advanced-aesthetics",
	"laser-recovery",
];

export const SERVICE_PHOTOS = SERVICE_SLUGS.map(
	(_, i) => `/image/services/s${i + 1}.jpg`
);

// slug → 1-based index (0 when the slug is unknown)
export const indexForSlug = (slug) => SERVICE_SLUGS.indexOf(slug) + 1;

// 1-based index → slug
export const slugForIndex = (i) => SERVICE_SLUGS[i - 1];
