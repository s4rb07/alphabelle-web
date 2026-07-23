"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Crossfade background slideshow with manual navigation.
// Auto-advances every `interval` ms; users can also swipe/drag or use the
// arrows and dots. Manual navigation restarts the auto timer.
const HeroSlideshow = ({ images = [], interval = 6000 }) => {
	const [active, setActive] = useState(0);
	const count = images.length;
	const dragStartX = useRef(null);

	const goTo = useCallback(
		(next) => setActive(((next % count) + count) % count),
		[count]
	);

	useEffect(() => {
		if (count <= 1) return;
		const id = setInterval(
			() => setActive((i) => (i + 1) % count),
			interval
		);
		return () => clearInterval(id);
		// `active` in deps so manual navigation resets the auto timer
	}, [count, interval, active]);

	const onDragStart = (x) => {
		dragStartX.current = x;
	};
	const onDragEnd = (x) => {
		if (dragStartX.current == null) return;
		const dx = x - dragStartX.current;
		if (Math.abs(dx) > 40) goTo(dx < 0 ? active + 1 : active - 1);
		dragStartX.current = null;
	};

	return (
		<div
			className="absolute inset-0"
			onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
			onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
			onPointerDown={(e) => e.pointerType === "mouse" && onDragStart(e.clientX)}
			onPointerUp={(e) => e.pointerType === "mouse" && onDragEnd(e.clientX)}
		>
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
						draggable={false}
					/>
				</div>
			))}

			{count > 1 && (
				<>
					<button
						type="button"
						aria-label="Previous image"
						onClick={() => goTo(active - 1)}
						className="pointer-events-auto absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-cream/15 text-cream ring-1 ring-cream/25 backdrop-blur-sm transition-colors hover:bg-cream hover:text-espresso md:left-6"
					>
						<ChevronLeft size={20} />
					</button>
					<button
						type="button"
						aria-label="Next image"
						onClick={() => goTo(active + 1)}
						className="pointer-events-auto absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-cream/15 text-cream ring-1 ring-cream/25 backdrop-blur-sm transition-colors hover:bg-cream hover:text-espresso md:right-6"
					>
						<ChevronRight size={20} />
					</button>

					<div className="pointer-events-auto absolute inset-x-0 bottom-6 z-20 flex justify-center gap-2.5">
						{images.map((src, i) => (
							<button
								key={src}
								type="button"
								aria-label={`Go to image ${i + 1}`}
								onClick={() => goTo(i)}
								className={`h-2 rounded-full transition-all duration-300 ${
									i === active
										? "w-6 bg-cream"
										: "w-2 bg-cream/45 hover:bg-cream/70"
								}`}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default HeroSlideshow;
