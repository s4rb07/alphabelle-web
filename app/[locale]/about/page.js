import React from "react";
import { useTranslations } from "next-intl";
import PageHero from "@/components/Shared/PageHero";
import StorySection from "@/components/About/StorySection";
import MissionVision from "@/components/About/MissionVision";
import TeamSection from "@/components/About/TeamSection";
import CredentialsSection from "@/components/About/CredentialsSection";
import BookingCTA from "@/components/Shared/BookingCTA";
import { getPageMetadata } from "@/lib/seo";

export function generateMetadata({ params }) {
	return getPageMetadata("about", params.locale);
}

const About = () => {
	const t = useTranslations("AboutPage");
	return (
		<main>
			<PageHero
				eyebrow={t("heroEyebrow")}
				title={t("heroTitle")}
				intro={t("heroIntro")}
				slides={[
					"/image/about/facility-reception.jpg",
					"/image/about/facility-carelika.jpg",
					"/image/about/facility-room.jpg",
				]}
			/>
			<StorySection />
			<MissionVision />
			<TeamSection />
			<CredentialsSection />
			<BookingCTA />
		</main>
	);
};

export default About;
