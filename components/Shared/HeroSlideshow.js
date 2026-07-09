"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Crossfade background slideshow. Holds each image for `interval` ms,
// then fades to the next over ~1.5s. Used behind PageHero when `slides` is set.
const HeroSlideshow = ({ images = [], interval = 6000 }) => {
	const [active, setActive] = useState(0);

	useEffect(() => {
		if (images.length <= 1) return;
		const id = setInterval(() => {
			setActive((i) => (i + 1) % images.length);
		}, interval);
		return () => clearInterval(id);
	}, [images.length, interval]);

	return (
		<div className="absolute inset-0" aria-hidden="true">
			{images.map((src, i) => (
				<div
					key={src}
					className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
						i === active ? "opacity-100" : "opacity-0"
					}`}
				>
					<Image
						src={src}
						alt=""
						fill
						priority={i === 0}
						sizes="100vw"
						className="object-cover"
					/>
				</div>
			))}
		</div>
	);
};

export default HeroSlideshow;
