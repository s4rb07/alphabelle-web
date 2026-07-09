import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const WhoWeAre = () => {
	const t = useTranslations("Home");
	const a = useTranslations("AboutUsHome");
	const locale = useLocale();

	return (
		<section className="relative overflow-hidden bg-espresso px-6 py-24 text-cream md:py-32">
			<div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
				{/* Image collage — a woman and a man, both receiving care */}
				<div className="relative" data-aos="fade-right">
					<div className="grid grid-cols-2 gap-4">
						<div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.5rem]">
							<Image
								src="/image/site/about-portrait.jpg"
								alt="Woman receiving a treatment at AlphaBelle Wellness"
								fill
								className="object-cover"
							/>
						</div>
						<div className="relative mt-10 aspect-[3/4] w-full overflow-hidden rounded-[1.5rem]">
							<Image
								src="/image/site/about-man.jpg"
								alt="Man receiving a treatment at AlphaBelle Wellness"
								fill
								className="object-cover"
							/>
						</div>
					</div>
					<div className="absolute -left-5 -top-5 h-24 w-24 rounded-full border border-champagne/40" />
				</div>

				{/* Copy */}
				<div data-aos="fade-left">
					<p className="eyebrow text-champagne">{t("whoEyebrow")}</p>
					<h2 className="mt-5 font-serif text-4xl font-light italic leading-[1.1] md:text-5xl lg:text-6xl">
						{a("text1")}
					</h2>
					<div className="hairline mt-8 w-28" />
					<p className="mt-8 text-base font-light leading-relaxed text-cream/80">
						{a("text2")}
					</p>
					<p className="mt-5 text-base font-light leading-relaxed text-cream/80">
						{t("whoText")}
					</p>
					<Link
						href={`/${locale}/about`}
						className="mt-10 inline-flex items-center gap-2 rounded-full border border-cream/40 px-9 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors duration-300 hover:border-champagne hover:text-champagne"
					>
						{t("whoCta")}
						<span aria-hidden>→</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default WhoWeAre;
