import { useTranslations } from "next-intl";
import PageHero from "@/components/Shared/PageHero";
import ServicesGrid from "@/components/Services/ServicesGrid";
import BookingCTA from "@/components/Shared/BookingCTA";
import { getPageMetadata } from "@/lib/seo";

export function generateMetadata({ params }) {
	return getPageMetadata("services", params.locale);
}

export default function ServicesPage() {
	const t = useTranslations("Services");
	return (
		<main>
			<PageHero
				eyebrow={t("pageEyebrow")}
				title={t("pageTitle")}
				intro={t("pageIntro")}
			/>
			<ServicesGrid />
			<BookingCTA />
		</main>
	);
}
