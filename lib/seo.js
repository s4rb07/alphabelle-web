// Central SEO config for AlphaBelle Wellness.
// Single source of truth for site URL, business NAP, per-page metadata and JSON-LD.
// NOTE: must match the canonical redirect set in Vercel (apex vs www). Confirm before launch.

export const SITE_URL = "https://alphabellewellness.com";

export const locales = ["en", "es"];
export const defaultLocale = "en";

// Real business data (NAP) — pulled from the live site (footer + map embed).
export const BUSINESS = {
	name: "AlphaBelle Wellness",
	legalName: "AlphaBelle Wellness",
	telephone: "+1-281-505-1331",
	email: "info@alphabellewellness.com",
	streetAddress: "2750 FM 1463 Suite 250",
	addressLocality: "Katy",
	addressRegion: "TX",
	postalCode: "77494",
	addressCountry: "US",
	latitude: 29.751256,
	longitude: -95.854815,
	logo: "/image/logo.png",
	image: "/image/site/spa-interior.jpg",
	sameAs: [
		"https://www.instagram.com/alphabellewellness",
		"https://www.facebook.com/alphabellewellness",
		"https://www.tiktok.com/@alphabellewellness",
		"https://www.linkedin.com/company/alphabellewellness",
	],
	// Open Mon–Fri 9 AM–5 PM; closed Sat/Sun (confirmed by client, 9 jul 2026).
	openingHours: [
		{
			days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			opens: "09:00",
			closes: "17:00",
		},
	],
};

const OG_LOCALE = { en: "en_US", es: "es_US" };

// Per-page, per-locale SEO copy. Titles include the brand; descriptions <160 chars.
const PAGES = {
	home: {
		path: "",
		en: {
			title: "AlphaBelle Wellness — Regenerative Medicine & Aesthetics in Katy, TX",
			description:
				"Medical wellness and aesthetic medicine under one roof in Katy, TX — weight loss, hormone therapy, Botox, fillers, PRP and advanced skin treatments.",
		},
		es: {
			title: "AlphaBelle Wellness — Medicina Regenerativa y Estética en Katy, TX",
			description:
				"Bienestar médico y medicina estética en un solo lugar en Katy, TX — pérdida de peso, terapia hormonal, Botox, rellenos, PRP y tratamientos de piel.",
		},
	},
	about: {
		path: "/about",
		en: {
			title: "About Us — AlphaBelle Wellness",
			description:
				"Meet the AlphaBelle Wellness team in Katy, TX — physician-led regenerative medicine and aesthetics focused on natural, lasting results.",
		},
		es: {
			title: "Nosotros — AlphaBelle Wellness",
			description:
				"Conoce al equipo de AlphaBelle Wellness en Katy, TX — medicina regenerativa y estética con supervisión médica y resultados naturales y duraderos.",
		},
	},
	services: {
		path: "/services",
		en: {
			title: "Services — AlphaBelle Wellness",
			description:
				"Weight loss, hormone optimization, NAD+ therapy, Botox, fillers, PRP and advanced skin & laser treatments in Katy, TX.",
		},
		es: {
			title: "Servicios — AlphaBelle Wellness",
			description:
				"Pérdida de peso, optimización hormonal, terapia NAD+, Botox, rellenos, PRP y tratamientos avanzados de piel y láser en Katy, TX.",
		},
	},
	faq: {
		path: "/faq",
		en: {
			title: "FAQ — AlphaBelle Wellness",
			description:
				"Answers about AlphaBelle Wellness in Katy, TX — hours, location, services, booking and what to expect from your visit.",
		},
		es: {
			title: "Preguntas Frecuentes — AlphaBelle Wellness",
			description:
				"Respuestas sobre AlphaBelle Wellness en Katy, TX — horario, ubicación, servicios, reservación y qué esperar de tu visita.",
		},
	},
};

// Service catalog for MedicalProcedure schema (names mirror messages Services.full1..6).
const SERVICES = {
	en: [
		"Weight Loss & Metabolic Optimization",
		"Hormone Optimization & Men's / Women's Health",
		"Wellness Injections & Cellular Health Therapy",
		"Aesthetic Injectables & Regenerative Medicine",
		"Advanced Skin & Non-Invasive Aesthetic Treatments",
		"Laser & Body Recovery Services",
	],
	es: [
		"Pérdida de Peso y Optimización Metabólica",
		"Optimización Hormonal y Salud de Hombres / Mujeres",
		"Inyecciones de Bienestar y Terapia Celular",
		"Inyectables Estéticos y Medicina Regenerativa",
		"Tratamientos Avanzados de Piel No Invasivos",
		"Servicios de Láser y Recuperación Corporal",
	],
};

// Build a Next.js Metadata object for a given page + locale.
export function getPageMetadata(page, locale) {
	const lang = locales.includes(locale) ? locale : defaultLocale;
	const cfg = PAGES[page];
	const { title, description } = cfg[lang];
	const path = cfg.path;

	const canonical = `/${lang}${path}`;
	const languages = {
		en: `/en${path}`,
		es: `/es${path}`,
		"x-default": `/${defaultLocale}${path}`,
	};

	return {
		title,
		description,
		alternates: { canonical, languages },
		openGraph: {
			title,
			description,
			url: canonical,
			siteName: BUSINESS.name,
			locale: OG_LOCALE[lang],
			type: "website",
			images: [{ url: BUSINESS.image, alt: BUSINESS.name }],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [BUSINESS.image],
		},
	};
}

// MedicalClinic (LocalBusiness) JSON-LD — rendered site-wide from the layout.
export function localBusinessJsonLd(locale = defaultLocale) {
	const lang = locales.includes(locale) ? locale : defaultLocale;
	return {
		"@context": "https://schema.org",
		"@type": "MedicalClinic",
		"@id": `${SITE_URL}/#clinic`,
		name: BUSINESS.name,
		url: `${SITE_URL}/${lang}`,
		logo: `${SITE_URL}${BUSINESS.logo}`,
		image: `${SITE_URL}${BUSINESS.image}`,
		telephone: BUSINESS.telephone,
		email: BUSINESS.email,
		address: {
			"@type": "PostalAddress",
			streetAddress: BUSINESS.streetAddress,
			addressLocality: BUSINESS.addressLocality,
			addressRegion: BUSINESS.addressRegion,
			postalCode: BUSINESS.postalCode,
			addressCountry: BUSINESS.addressCountry,
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: BUSINESS.latitude,
			longitude: BUSINESS.longitude,
		},
		sameAs: BUSINESS.sameAs,
		openingHoursSpecification: BUSINESS.openingHours.map((h) => ({
			"@type": "OpeningHoursSpecification",
			dayOfWeek: h.days,
			opens: h.opens,
			closes: h.closes,
		})),
		availableService: SERVICES[lang].map((name) => ({
			"@type": "MedicalProcedure",
			name,
		})),
	};
}

// FAQPage JSON-LD — built from the localized FAQ items rendered on /faq.
export function faqJsonLd(items) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: items.map(({ q, a }) => ({
			"@type": "Question",
			name: q,
			acceptedAnswer: { "@type": "Answer", text: a },
		})),
	};
}
