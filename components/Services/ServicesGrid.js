"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { SERVICE_SLUGS } from "@/lib/services";
import {
	ArrowUpRight,
	Check,
	Scale,
	Dna,
	Syringe,
	Sparkles,
	Gem,
	Zap,
} from "lucide-react";

// 6 categories → photo (fallback to lucide icon if a photo is missing)
const SERVICES = [
	{ Icon: Scale, photo: "/image/services/s1.jpg" },
	{ Icon: Dna, photo: "/image/services/s2.jpg" },
	{ Icon: Syringe, photo: "/image/services/s3.jpg" },
	{ Icon: Sparkles, photo: "/image/services/s4.jpg" },
	{ Icon: Gem, photo: "/image/services/s5.jpg" },
	{ Icon: Zap, photo: "/image/services/s6.jpg" },
];

export default function ServicesGrid() {
	const t = useTranslations("Services");
	const locale = useLocale();

	return (
		<section className="bg-cream px-6 py-14 md:py-20">
			<div className="mx-auto flex max-w-5xl flex-col gap-10 md:gap-14">
				{SERVICES.map((service, i) => {
					const num = i + 1;
					const flipped = i % 2 === 1; // alternate sides on desktop
					const items = t.raw(`items${num}`);
					const Icon = service.Icon;
					return (
						<article
							key={num}
							className="grid grid-cols-1 items-center gap-5 md:grid-cols-[0.9fr_1.1fr] md:gap-10"
						>
							{/* Media */}
							<div
								className={`relative grain flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl border border-stone/50 bg-gradient-to-br from-sand via-cream to-stone ${
									flipped ? "md:order-2" : ""
								}`}
							>
								{service.photo ? (
									<Image
										src={service.photo}
										alt={t(`full${num}`)}
										fill
										className="object-cover"
									/>
								) : (
									<Icon
										size={72}
										strokeWidth={1.5}
										className="relative text-taupe opacity-90"
									/>
								)}
							</div>

							{/* Body */}
							<div className={flipped ? "md:order-1" : ""}>
								<span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sand text-taupe">
									<Icon size={22} strokeWidth={1.5} />
								</span>
								<h3 className="mt-4 font-serif text-2xl font-medium leading-tight text-espresso md:text-[1.75rem]">
									{t(`full${num}`)}
								</h3>
								<div className="hairline mt-3 w-12" />
								<p className="mt-3 text-sm font-light leading-relaxed text-espresso/65">
									{t(`descripcion${num}`)}
								</p>
								<ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
									{items.map((item, j) => (
										<li
											key={j}
											className="flex items-start gap-2 text-sm font-light text-espresso/75"
										>
											<Check
												size={15}
												className="mt-0.5 shrink-0 text-gold"
											/>
											<span>{item}</span>
										</li>
									))}
								</ul>
								<Link
									href={`/${locale}/services/${SERVICE_SLUGS[i]}`}
									className="group mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-taupe transition-colors hover:text-gold"
								>
									{t("buttons1")}
									<ArrowUpRight
										size={14}
										className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
									/>
								</Link>
							</div>
						</article>
					);
				})}

				{/* Why choose Alphabelle */}
				<div className="mt-4 rounded-3xl border border-stone/50 bg-sand/40 px-7 py-12 md:px-14 md:py-16">
					<div className="mx-auto max-w-3xl text-center">
						<p className="eyebrow text-gold">{t("whyEyebrow")}</p>
						<h3 className="mt-4 font-serif text-3xl font-light leading-tight text-espresso md:text-4xl">
							{t("whyTitle")}
						</h3>
						<div className="hairline mx-auto mt-6 w-16" />
					</div>
					<ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
						{t.raw("why").map((reason, j) => (
							<li
								key={j}
								className="flex items-start gap-2.5 text-sm font-light text-espresso/80"
							>
								<Check size={16} className="mt-0.5 shrink-0 text-gold" />
								<span>{reason}</span>
							</li>
						))}
					</ul>
					<p className="mt-12 text-center font-serif text-xl font-light italic text-taupe md:text-2xl">
						{t("closing")}
					</p>
				</div>
			</div>
		</section>
	);
}
