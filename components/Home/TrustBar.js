import React from "react";
import { useTranslations } from "next-intl";
import { HandCoins, Flag, ShieldCheck } from "lucide-react";

// Slim trust strip under the hero: financing, American-made, medical oversight.
const ITEMS = [
	{ Icon: HandCoins, key: "financing" },
	{ Icon: Flag, key: "americanMade" },
	{ Icon: ShieldCheck, key: "medical" },
];

const TrustBar = () => {
	const t = useTranslations("TrustBar");

	return (
		<section className="border-b border-stone/40 bg-sand px-6 py-5">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 text-center sm:flex-row sm:flex-wrap sm:gap-x-12 sm:gap-y-3">
				{ITEMS.map(({ Icon, key }) => (
					<div key={key} className="flex items-center gap-2.5">
						<Icon size={18} strokeWidth={1.5} className="shrink-0 text-gold" />
						<span className="text-sm font-medium tracking-wide text-espresso/85">
							{t(key)}
						</span>
					</div>
				))}
			</div>
		</section>
	);
};

export default TrustBar;
