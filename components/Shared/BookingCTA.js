import React from "react";
import { useTranslations } from "next-intl";
import { BOOKING_URL } from "@/lib/config";

const BookingCTA = () => {
	const t = useTranslations("Services");
	const n = useTranslations("NavBar");

	return (
		<section className="bg-sand px-6 py-20">
			<div className="mx-auto flex max-w-4xl flex-col items-center gap-7 rounded-[2rem] bg-espresso px-8 py-16 text-center text-cream md:px-16">
				<p className="eyebrow text-champagne">{t("texts1")}</p>
				<h2 className="max-w-2xl font-serif text-3xl font-light leading-tight md:text-4xl">
					{t("texts2")}
				</h2>
				<a
					href={BOOKING_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="rounded-full bg-cream px-9 py-3.5 text-sm font-semibold tracking-wide text-espresso transition-colors duration-300 hover:bg-champagne"
				>
					{n("buttonCont")}
				</a>
			</div>
		</section>
	);
};

export default BookingCTA;
