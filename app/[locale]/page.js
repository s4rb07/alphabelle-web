import BackgroundWrapper from "@/components/BackgroundWrapper";
import ContactSection from "@/components/Contact/ContactSection";
import MapSection from "@/components/Contact/Mapsection";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import TrustBar from "@/components/Home/TrustBar";
import WhatWeDo from "@/components/Home/WhatWeDo";
import WhoWeAre from "@/components/Home/WhoWeAre";
import { getPageMetadata } from "@/lib/seo";

export function generateMetadata({ params }) {
	return getPageMetadata("home", params.locale);
}

export default function Home() {
	return (
		<main>
			<HeroBanner />
			<TrustBar />
			<WhatWeDo />
			<WhoWeAre />
			<BackgroundWrapper />
			<ContactSection />
			<MapSection />
		</main>
	);
}
