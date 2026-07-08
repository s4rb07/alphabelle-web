import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const StorySection = () => {
	const ap = useTranslations("AboutPage");
	const a = useTranslations("AboutUs");

	return (
		<section className="bg-cream px-6 py-24 md:py-32">
			<div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
				<div className="relative order-2 lg:order-1" data-aos="fade-right">
					<div className="relative aspect-[5/6] w-full overflow-hidden rounded-[2rem]">
						<Image
							src="/image/story-team.jpg"
							alt="AlphaBelle Wellness"
							fill
							className="object-cover"
						/>
					</div>
					<div className="absolute -right-5 -top-5 h-28 w-28 rounded-full border border-gold/30" />
					<div className="absolute -bottom-6 -left-6 hidden aspect-[4/3] w-40 overflow-hidden rounded-2xl border-4 border-cream shadow-lg sm:block">
						<Image src="/image/2.png" alt="" fill className="object-cover" />
					</div>
				</div>

				<div className="order-1 lg:order-2" data-aos="fade-left">
					<p className="eyebrow text-gold">{ap("storyEyebrow")}</p>
					<h2 className="mt-5 font-serif text-4xl font-light leading-[1.1] text-espresso md:text-5xl">
						{ap("storyTitle")}
					</h2>
					<div className="hairline mt-7 w-24" />
					<div className="mt-7 space-y-5 text-base font-light leading-relaxed text-espresso/75">
						<p>{a("text")}</p>
						<p>{a("text1")}</p>
						<p>{a("text2")}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StorySection;
