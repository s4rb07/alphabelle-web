import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import PageHero from "@/components/Shared/PageHero";
import BookingCTA from "@/components/Shared/BookingCTA";
import JsonLd from "@/components/Shared/JsonLd";
import { getPageMetadata, faqJsonLd } from "@/lib/seo";

export function generateMetadata({ params }) {
	return getPageMetadata("faq", params.locale);
}

export default function Faq() {
	const t = useTranslations("FaqPage");
	const items = t.raw("items");

	return (
		<main>
			<JsonLd data={faqJsonLd(items)} />
			<PageHero
				eyebrow={t("heroEyebrow")}
				title={t("heroTitle")}
				intro={t("heroIntro")}
			/>
			<section className="bg-cream px-6 py-20 md:py-28">
				<div className="mx-auto max-w-3xl [&_summary::-webkit-details-marker]:hidden">
					{items.map((item, i) => (
						<details
							key={i}
							className="group border-b border-espresso/10 py-5"
						>
							<summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-serif text-lg font-light text-espresso transition-colors hover:text-taupe">
								<span>{item.q}</span>
								<ChevronDown
									size={20}
									className="shrink-0 text-gold transition-transform duration-300 group-open:rotate-180"
								/>
							</summary>
							<p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-espresso/70">
								{item.a}
							</p>
						</details>
					))}
				</div>
			</section>
			<BookingCTA />
		</main>
	);
}
