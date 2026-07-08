import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "es"]; // 'en' primero = predeterminado
export const defaultLocale = "en"; // idioma predeterminado
export const localePrefix = "always"; // siempre incluye el prefijo de idioma en las rutas

export const pathnames = {
	"/": "/",
	"/about": "/about",
	"/services": "/services",
};

export const { Link, redirect, usePathname, useRouter } =
	createSharedPathnamesNavigation({
		locales,
		localePrefix,
		defaultLocale,
	});
