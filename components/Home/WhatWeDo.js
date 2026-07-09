import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Scale, Dna, Syringe, Sparkles, Gem, Zap, ArrowUpRight } from "lucide-react";

// 6 service categories → editorial photo + matching lucide line-icon
const SERVICES = [
	{ Icon: Scale, photo: "/image/services/s1.jpg" },
	{ Icon: Dna, photo: "/image/services/s2.jpg" },
	{ Icon: Syringe, photo: "/image/services/s3.jpg" },
	{ Icon: Sparkles, photo: "/image/services/s4.jpg" },
	{ Icon: Gem, photo: "/image/services/s5.jpg" },
	{ Icon: Zap, photo: "/image/services/s6.jpg" },
];

const WhatWeDo = () => {
	const t = useTranslations("Home");
	const s = useTranslations("Services");
	const locale = useLocale();

	return (
		<section id="what-we-do" className="relative bg-cream px-6 py-24 md:py-32">
			<div className="mx-auto max-w-6xl">
				<div className="mx-auto mb-16 max-w-2xl text-center" data-aos="fade-up">
					<p className="eyebrow text-gold">{t("whatEyebrow")}</p>
					<h2 className="mt-4 font-serif text-4xl font-light leading-tight text-espresso md:text-5xl">
						{t("whatTitle")}
					</h2>
					<div className="hairline mx-auto mt-7 w-24" />
					<p className="mt-7 text-base font-light leading-relaxed text-espresso/70">
						{t("whatText")}
					</p>
				</div>

				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{SERVICES.map(({ Icon, photo }, i) => {
						const num = i + 1;
						return (
							<Link
								key={num}
								href={`/${locale}/services`}
								data-aos="fade-up"
								data-aos-delay={(i % 3) * 120}
								className="group relative block aspect-[4/5] overflow-hidden rounded-2xl"
							>
								<Image
									src={photo}
									alt={s(`s${num}`)}
									fill
									sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
									className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/25 to-transparent transition-opacity duration-500 group-hover:from-espresso" />

								<span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-cream/15 text-cream ring-1 ring-cream/25 backdrop-blur-sm transition-colors duration-300 group-hover:bg-cream group-hover:text-gold">
									<Icon size={20} strokeWidth={1.5} />
								</span>

								<div className="absolute inset-x-0 bottom-0 p-6">
									<span className="font-serif text-sm italic tracking-wide text-champagne">
										{`0${num}`}
									</span>
									<h3 className="mt-1 font-serif text-2xl font-light leading-tight text-cream">
										{s(`s${num}`)}
									</h3>
									<span className="mt-3 inline-flex translate-y-1 items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-cream/90">
										{s("buttons1")}
										<ArrowUpRight size={13} />
									</span>
								</div>

								<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-cream/10 transition-colors duration-300 group-hover:ring-gold/60" />
							</Link>
						);
					})}
				</div>

				<div className="mt-12 text-center" data-aos="fade-up">
					<Link
						href={`/${locale}/services`}
						className="inline-flex items-center gap-2 rounded-full bg-espresso px-9 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors duration-300 hover:bg-taupe"
					>
						{t("whatCta")}
						<span aria-hidden>→</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default WhatWeDo;
