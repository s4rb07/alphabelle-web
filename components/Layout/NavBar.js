"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Menu, ChevronDown } from "lucide-react";

const LANGUAGES = [
	{ code: "en", label: "English" },
	{ code: "es", label: "Spanish" },
];

const SHOP_URL = "https://shop.alphabellewellness.com";

const NavBar = () => {
	const [isSideMenuOpen, setisSideMenuOpen] = useState(false);
	const [isLangOpen, setIsLangOpen] = useState(false);
	const langRef = useRef(null);
	const t = useTranslations("NavBar");
	const localActive = useLocale();


 const locale = useLocale();
	const pathname = usePathname();
	const router = useRouter();

	const currentLanguage =
		LANGUAGES.find((l) => l.code === locale)?.label ?? locale.toUpperCase();

	const changeLocale = (newLocale) => {
		setIsLangOpen(false);
		if (newLocale === locale) return;
		const newPath = `/${newLocale}${pathname.replace(`/${locale}`, "")}`;
		router.replace(newPath);
	};

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (langRef.current && !langRef.current.contains(e.target)) {
				setIsLangOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const links = [
		{ name: "links1", href: "href1", current: false },
		{ name: "links2", href: "href2", current: false },
		{ name: "links3", href: "href3", current: false },
	];

	const showSideMenu = () => setisSideMenuOpen(!isSideMenuOpen);

	return (
		<nav className="font-serif p-2 lg:p-2 mt-0 fixed w-full z-40 top-0 shadow-lg bg-espresso">
			<div className="mx-auto flex items-center justify-between px-10">
				<div className="flex w-32 lg:w-1/2 md:justify-start text-negro font-extrabold">
					<Link href="/" passHref>
						<div style={{ width: "35px" }}>
							<Image
								src="/image/iso_n.svg"
								alt="Logo"
								width="484"
								height="326"
								className="brightness-0 invert"
							/>
						</div>
					</Link>
				</div>
				<div className="flex lg:content-center justify-between md:w-1/2 md:justify-end">
					<ul className="list-reset hidden lg:flex justify-between flex-1 md:flex-none items-center">
						<li className="mr-3 flex space-x-3">
							{links.map((link) => (
								<Link
									key={link.name}
									href={`/${localActive}/${t(link.href)}`}
									className="px-3 py-2  text-md lg:text-lg text-cream hover:text-champagne transition-colors"
								>
									{t(link.name)}
								</Link>
							))}
							<a
								href={SHOP_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="px-3 py-2 text-md lg:text-lg text-cream hover:text-champagne transition-colors"
							>
								{t("shop")}
							</a>
							<button
								className="rounded-2xl font-bold text-espresso bg-cream lg:px-5 lg:py-1 hover:bg-champagne transition-colors"
								type="submit"
							>
								<a href={`/${localActive}/#contact`}>{t("buttonCont")}</a>
							</button>
							<div className="relative" ref={langRef}>
								<button
									onClick={() => setIsLangOpen((o) => !o)}
									aria-haspopup="listbox"
									aria-expanded={isLangOpen}
									className="flex items-center gap-1.5 px-3 py-2 text-md lg:text-lg text-cream hover:text-champagne transition-colors"
								>
									{currentLanguage}
									<ChevronDown
										size={18}
										className={`transition-transform duration-200 ${
											isLangOpen ? "rotate-180" : ""
										}`}
									/>
								</button>
								{isLangOpen && (
									<ul className="absolute right-0 top-full mt-2 min-w-[150px] overflow-hidden rounded-xl border border-cream/15 bg-espresso py-1 shadow-xl">
										{LANGUAGES.map((lang) => (
											<li key={lang.code}>
												<button
													onClick={() => changeLocale(lang.code)}
													className={`block w-full px-4 py-2 text-left text-base transition-colors hover:bg-cream/10 ${
														lang.code === locale
															? "text-champagne"
															: "text-cream"
													}`}
												>
													{lang.label}
												</button>
											</li>
										))}
									</ul>
								)}
							</div>
						</li>
					</ul>
					<button
						aria-label="Abrir menu"
						onClick={showSideMenu}
						className="lg:hidden w-8 h-8 rounded-xl overflow-hidden text-white"
					>
						<Menu className="w-8 h-8" />
					</button>
					<div
						className={`transition-all duration-500 ease-in-out fixed w-full lg:hidden bg-white left-0 top-12 overflow-hidden ${
							isSideMenuOpen ? "h-auto" : "h-0"
						}`}
					>
						<ul className="flex flex-col p-10 justify-center space-y-3 bg-primary text-center">
							{links.map((item) => (
								<li key={t(item.name)}>
									<a
										href={`/${localActive}/${t(item.href)}`}
										className="px-3 py-2 rounded-md text-2xl lg:text-lg text-white hover:text-secundary transition-colors"
									>
										{t(item.name)}
									</a>
								</li>
							))}
							<li>
								<a
									href={SHOP_URL}
									target="_blank"
									rel="noopener noreferrer"
									className="px-3 py-2 rounded-md text-2xl lg:text-lg text-white hover:text-secundary transition-colors"
								>
									{t("shop")}
								</a>
							</li>
							{LANGUAGES.map((lang) => (
								<button
									key={lang.code}
									onClick={() => changeLocale(lang.code)}
									className={`px-3 py-2 rounded-md text-2xl lg:text-lg transition-colors hover:text-secundary ${
										lang.code === locale ? "font-bold text-secundary" : "text-white"
									}`}
								>
									{lang.label}
								</button>
							))}
							<button
								href="#contact"
								className="rounded-full font-semibold text-primary bg-m px-5 py-1 hover:bg-secundary transition-colors"
								type="submit"
							>
								<a href={`/${localActive}/#contact`}>{t("buttonCont")}</a>
							</button>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
