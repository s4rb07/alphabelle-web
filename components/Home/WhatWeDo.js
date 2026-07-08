import React from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Scale, Dna, Syringe, Sparkles, Gem, Zap } from "lucide-react";

// 6 service blocks → matching lucide line-icon (uniform, tinted to the theme)
const SERVICE_ICONS = [Scale, Dna, Syringe, Sparkles, Gem, Zap];

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

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{SERVICE_ICONS.map((Icon, i) => {
						const num = i + 1;
						return (
							<Link
								key={num}
								href={`/${locale}/services`}
								className="group flex items-center gap-4 rounded-2xl border border-stone/50 bg-cream px-6 py-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-sand hover:shadow-[0_12px_30px_-18px_rgba(42,37,33,0.5)]"
							>
								<span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sand text-taupe transition-all duration-300 group-hover:bg-cream group-hover:text-gold">
									<Icon size={26} strokeWidth={1.5} />
								</span>
								<span className="font-sans text-sm font-medium leading-snug text-espresso">
									{s(`s${num}`)}
								</span>
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
