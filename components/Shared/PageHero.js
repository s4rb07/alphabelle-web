import React from "react";
import HeroSlideshow from "./HeroSlideshow";

const PageHero = ({ eyebrow, title, intro, slides }) => {
	return (
		<section
			className={`relative overflow-hidden bg-espresso px-6 text-cream ${
				slides?.length
					? "pb-40 pt-52 md:pb-52 md:pt-64"
					: "pb-20 pt-40"
			}`}
		>
			{slides?.length ? (
				<>
					<HeroSlideshow images={slides} />
					<div className="pointer-events-none absolute inset-0 bg-espresso/70" />
				</>
			) : null}
			{/* decorative rings */}
			<div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-champagne/15" />
			<div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 translate-y-1/2 rounded-full border border-champagne/10" />

			<div className="relative mx-auto max-w-3xl text-center">
				<p className="eyebrow text-champagne">{eyebrow}</p>
				<h1 className="mt-5 font-serif text-5xl font-light leading-[1.05] md:text-6xl lg:text-7xl">
					{title}
				</h1>
				<div className="hairline mx-auto mt-8 w-24" />
				{intro && (
					<p className="mx-auto mt-7 max-w-xl text-base font-light leading-relaxed text-cream/75">
						{intro}
					</p>
				)}
			</div>
		</section>
	);
};

export default PageHero;
