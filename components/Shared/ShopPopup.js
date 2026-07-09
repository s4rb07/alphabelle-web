"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { X, ArrowUpRight } from "lucide-react";

const SHOP_URL = "https://shop.alphabellewellness.com";

const COPY = {
	en: {
		eyebrow: "AlphaBelle Shop",
		title: "Medical-grade skincare, delivered",
		body: "Take home the same professional products we use in-clinic — curated for visible, lasting results.",
		cta: "Visit the shop",
		dismiss: "Maybe later",
	},
	es: {
		eyebrow: "Tienda AlphaBelle",
		title: "Cuidado de grado médico, a tu puerta",
		body: "Lleva a casa los mismos productos profesionales que usamos en clínica — seleccionados para resultados visibles y duraderos.",
		cta: "Ir a la tienda",
		dismiss: "Quizás luego",
	},
};

export default function ShopPopup() {
	const locale = useLocale();
	const t = COPY[locale] ?? COPY.en;
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	// Show on every page open / navigation
	useEffect(() => {
		setOpen(false);
		const id = setTimeout(() => setOpen(true), 700);
		return () => clearTimeout(id);
	}, [pathname]);

	if (!open) return null;

	return (
		<div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
			<div
				className="absolute inset-0 bg-espresso/60 backdrop-blur-sm"
				onClick={() => setOpen(false)}
			/>
			<div
				role="dialog"
				aria-modal="true"
				className="ab-rise relative w-full max-w-md overflow-hidden rounded-3xl border border-champagne/30 bg-cream p-8 text-center shadow-[0_30px_80px_-20px_rgba(42,37,33,0.7)]"
			>
				<button
					onClick={() => setOpen(false)}
					aria-label="Close"
					className="absolute right-4 top-4 text-espresso/40 transition-colors hover:text-espresso"
				>
					<X size={20} />
				</button>

				<p className="eyebrow text-gold">{t.eyebrow}</p>
				<h2 className="mt-3 font-serif text-3xl font-light leading-tight text-espresso">
					{t.title}
				</h2>
				<div className="hairline mx-auto mt-5 w-16" />
				<p className="mx-auto mt-5 max-w-sm text-sm font-light leading-relaxed text-espresso/70">
					{t.body}
				</p>

				<a
					href={SHOP_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-7 inline-flex items-center gap-2 rounded-full bg-espresso px-8 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors duration-300 hover:bg-taupe"
				>
					{t.cta}
					<ArrowUpRight size={16} />
				</a>
				<button
					onClick={() => setOpen(false)}
					className="mt-4 block w-full text-xs font-medium uppercase tracking-[0.15em] text-espresso/45 transition-colors hover:text-espresso/70"
				>
					{t.dismiss}
				</button>
			</div>
		</div>
	);
}
