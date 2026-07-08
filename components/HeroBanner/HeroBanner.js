"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";

// Two ~8s clips that crossfade like a slideshow
const HERO_VIDEOS = ["/video/hero-1.mp4", "/video/hero-2.mp4"];
const SLIDE_MS = 8000;

const HeroBanner = () => {
	const t = useTranslations("Banner");
	const locale = useLocale();
	const [active, setActive] = useState(0);

	useEffect(() => {
		const id = setInterval(
			() => setActive((prev) => (prev + 1) % HERO_VIDEOS.length),
			SLIDE_MS
		);
		return () => clearInterval(id);
	}, []);

	return (
		<section className="relative h-[92vh] min-h-[620px] w-full overflow-hidden bg-espresso">
			{/* Background media: two clips crossfading; poster image as graceful fallback */}
			<div className="absolute inset-0">
				{HERO_VIDEOS.map((src, i) => (
					<video
						key={src}
						className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
							i === active ? "opacity-100" : "opacity-0"
						}`}
						autoPlay
						muted
						loop
						playsInline
						poster="/image/site/spa-interior.jpg"
					>
						<source src={src} type="video/mp4" />
					</video>
				))}
			</div>

			{/* Cinematic gradient overlay for legibility */}
			<div className="absolute inset-0 bg-gradient-to-b from-espresso/55 via-espresso/30 to-espresso/85" />
			<div className="absolute inset-0 bg-espresso/20" />

			{/* Content */}
			<div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-cream">
				<div className="ab-rise mb-7" style={{ animationDelay: "0.1s" }}>
					<Image
						src="/image/logo.png"
						alt="AlphaBelle Wellness"
						width={300}
						height={300}
						priority
						className="mx-auto h-auto w-[180px] brightness-0 invert md:w-[230px]"
					/>
				</div>

				<p
					className="ab-rise eyebrow mb-6 text-champagne"
					style={{ animationDelay: "0.25s" }}
				>
					Regenerative Medicine · Aesthetics
				</p>

				<h1
					className="ab-rise max-w-4xl text-balance font-serif text-4xl font-light leading-[1.08] md:text-6xl lg:text-7xl"
					style={{ animationDelay: "0.4s" }}
				>
					{t("title")}
				</h1>

				<p
					className="ab-rise mt-7 max-w-xl text-balance text-base font-light leading-relaxed text-cream/85 md:text-lg"
					style={{ animationDelay: "0.55s" }}
				>
					{t("parrafo1")}
				</p>

				<div
					className="ab-rise mt-10 flex flex-col items-center gap-4 sm:flex-row"
					style={{ animationDelay: "0.7s" }}
				>
					<a
						href={`/${locale}/#contact`}
						className="rounded-full bg-cream px-9 py-3.5 text-sm font-semibold tracking-wide text-espresso transition-all duration-300 hover:bg-champagne"
					>
						{t("buttonc")}
					</a>
					<a
						href={`/${locale}/services`}
						className="rounded-full border border-cream/50 px-9 py-3.5 text-sm font-semibold tracking-wide text-cream transition-all duration-300 hover:border-cream hover:bg-cream/10"
					>
						{t("buttons")}
					</a>
				</div>
			</div>

			{/* Scroll cue */}
			<div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
				<div className="flex h-11 w-7 items-start justify-center rounded-full border border-cream/40 p-2">
					<span className="h-2 w-1 animate-bounce rounded-full bg-cream/70" />
				</div>
			</div>
		</section>
	);
};

export default HeroBanner;
