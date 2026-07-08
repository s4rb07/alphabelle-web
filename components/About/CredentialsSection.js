import React from "react";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

const CredentialsSection = () => {
	const t = useTranslations("AboutPage");

	const stats = [
		{ n: t("stat1n"), l: t("stat1l") },
		{ n: t("stat2n"), l: t("stat2l") },
		{ n: t("stat3n"), l: t("stat3l") },
	];

	const certs = [t("cert1"), t("cert2"), t("cert3"), t("cert4")];

	return (
		<section className="relative overflow-hidden bg-espresso px-6 py-24 text-cream md:py-28">
			<div className="pointer-events-none absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-champagne/10" />

			<div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
				<div data-aos="fade-up">
					<p className="eyebrow text-champagne">{t("credEyebrow")}</p>
					<h2 className="mt-5 font-serif text-4xl font-light leading-[1.1] md:text-5xl">
						{t("credTitle")}
					</h2>
					<div className="hairline mt-7 w-24" />
					<p className="mt-7 max-w-md text-base font-light leading-relaxed text-cream/75">
						{t("credIntro")}
					</p>

					<ul className="mt-9 space-y-4">
						{certs.map((c, i) => (
							<li key={i} className="flex items-center gap-3.5">
								<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-champagne/15 text-champagne">
									<Check size={15} strokeWidth={2.5} />
								</span>
								<span className="text-sm font-light text-cream/85">{c}</span>
							</li>
						))}
					</ul>
				</div>

				<div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1" data-aos="fade-up">
					{stats.map((s, i) => (
						<div
							key={i}
							className="rounded-2xl border border-cream/10 bg-cream/[0.04] px-8 py-7 text-center lg:flex lg:items-baseline lg:gap-5 lg:text-left"
						>
							<p className="font-serif text-4xl font-light text-champagne lg:w-40 lg:shrink-0">
								{s.n}
							</p>
							<p className="mt-2 text-sm font-light text-cream/70 lg:mt-0">
								{s.l}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CredentialsSection;
