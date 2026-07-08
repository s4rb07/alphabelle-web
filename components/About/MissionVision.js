import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const MissionVision = () => {
	const t = useTranslations("AboutUs");

	const blocks = [
		{
			icon: "/image/icons/icono misión.png",
			title: t("mision"),
			body: [t("textM"), t("textM1")],
		},
		{
			icon: "/image/icons/icono visión.png",
			title: t("vision"),
			body: [t("textV"), t("textV1")],
		},
	];

	return (
		<section className="bg-sand px-6 py-24 md:py-28">
			<div className="mx-auto grid max-w-5xl gap-7 md:grid-cols-2">
				{blocks.map((b, i) => (
					<div
						key={i}
						data-aos="fade-up"
						data-aos-delay={i * 100}
						className="relative rounded-[2rem] bg-cream p-10 shadow-[0_18px_44px_-30px_rgba(42,37,33,0.5)]"
					>
						<Image
							src={b.icon}
							alt=""
							width={64}
							height={64}
							className="h-16 w-16 object-contain"
						/>
						<h3 className="mt-7 font-serif text-3xl font-medium text-espresso">
							{b.title}
						</h3>
						<div className="hairline mt-5 w-16" />
						<div className="mt-6 space-y-4 text-sm font-light leading-relaxed text-espresso/70">
							{b.body.map((p, j) => (
								<p key={j}>{p}</p>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default MissionVision;
