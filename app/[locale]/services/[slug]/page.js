import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowUpRight, ArrowLeft } from "lucide-react";
import PageHero from "@/components/Shared/PageHero";
import BookingCTA from "@/components/Shared/BookingCTA";
import { BOOKING_URL } from "@/lib/config";
import { BUSINESS, SITE_URL } from "@/lib/seo";
import { SERVICE_SLUGS, SERVICE_PHOTOS, indexForSlug } from "@/lib/services";

export async function generateMetadata({ params }) {
	const idx = indexForSlug(params.slug);
	if (!idx) return {};

	const t = await getTranslations({
		locale: params.locale,
		namespace: "Services",
	});
	const title = `${t(`full${idx}`)} — ${BUSINESS.name}`;
	const description = t(`descripcion${idx}`);
	const canonical = `/${params.locale}/services/${params.slug}`;

	return {
		title,
		description,
		alternates: {
			canonical,
			languages: {
				en: `/en/services/${params.slug}`,
				es: `/es/services/${params.slug}`,
				"x-default": `/en/services/${params.slug}`,
			},
		},
		openGraph: {
			title,
			description,
			url: canonical,
			siteName: BUSINESS.name,
			type: "website",
			images: [{ url: `${SITE_URL}${SERVICE_PHOTOS[idx - 1]}`, alt: title }],
		},
	};
}

export default function ServiceDetailPage({ params }) {
	const { locale, slug } = params;
	const idx = indexForSlug(slug);
	if (!idx) notFound();

	const t = useTranslations("Services");
	const items = t.raw(`items${idx}`);
	const photo = SERVICE_PHOTOS[idx - 1];

	const others = SERVICE_SLUGS.map((s, i) => ({ slug: s, num: i + 1 })).filter(
		(o) => o.num !== idx
	);

	return (
		<main>
			<PageHero
				eyebrow={t("pageEyebrow")}
				title={t(`full${idx}`)}
				intro={t(`descripcion${idx}`)}
				slides={[photo]}
			/>

			<section className="bg-cream px-6 py-16 md:py-24">
				<div className="mx-auto max-w-4xl">
					<Link
						href={`/${locale}/services`}
						className="group inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-taupe transition-colors hover:text-gold"
					>
						<ArrowLeft
							size={14}
							className="transition-transform group-hover:-translate-x-0.5"
						/>
						{t("backToServices")}
					</Link>

					<h2 className="mt-8 font-serif text-2xl font-light leading-tight text-espresso md:text-3xl">
						{t("includesTitle")}
					</h2>
					<div className="hairline mt-4 w-12" />

					<ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
						{items.map((item, j) => (
							<li
								key={j}
								className="flex items-start gap-2.5 text-sm font-light leading-relaxed text-espresso/80"
							>
								<Check size={16} className="mt-0.5 shrink-0 text-gold" />
								<span>{item}</span>
							</li>
						))}
					</ul>

					<div className="mt-12 flex flex-wrap items-center gap-4 rounded-2xl border border-stone/50 bg-sand/40 px-7 py-7">
						<div className="flex-1">
							<p className="font-serif text-lg font-light text-espresso">
								{t("texts1")}
							</p>
							<p className="mt-1 text-sm font-light text-espresso/65">
								{t("texts2")}
							</p>
						</div>
						<a
							href={BOOKING_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-full bg-espresso px-8 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors duration-300 hover:bg-taupe"
						>
							{t("buttons1")}
							<ArrowUpRight size={16} />
						</a>
					</div>
				</div>
			</section>

			<section className="bg-cream px-6 pb-20 md:pb-28">
				<div className="mx-auto max-w-4xl">
					<p className="eyebrow text-gold">{t("otherTitle")}</p>
					<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{others.map(({ slug: s, num }) => (
							<Link
								key={s}
								href={`/${locale}/services/${s}`}
								className="group flex items-center justify-between gap-3 rounded-2xl border border-stone/50 bg-sand/30 px-5 py-4 transition-colors hover:border-gold/60 hover:bg-sand/60"
							>
								<span className="font-serif text-base font-light leading-snug text-espresso">
									{t(`s${num}`)}
								</span>
								<ArrowUpRight
									size={16}
									className="shrink-0 text-taupe transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
								/>
							</Link>
						))}
					</div>
				</div>
			</section>

			<BookingCTA />
		</main>
	);
}
