import { SITE_URL, locales, defaultLocale } from "@/lib/seo";

const ROUTES = ["", "/about", "/services"];

export default function sitemap() {
	return ROUTES.flatMap((route) => {
		const languages = Object.fromEntries(
			locales.map((l) => [l, `${SITE_URL}/${l}${route}`])
		);
		return locales.map((locale) => ({
			url: `${SITE_URL}/${locale}${route}`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: route === "" ? 1 : 0.8,
			alternates: {
				languages: { ...languages, "x-default": `${SITE_URL}/${defaultLocale}${route}` },
			},
		}));
	});
}
