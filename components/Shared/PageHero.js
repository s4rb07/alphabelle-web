import React from "react";

const PageHero = ({ eyebrow, title, intro }) => {
	return (
		<section className="relative overflow-hidden bg-espresso px-6 pb-20 pt-40 text-cream">
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
