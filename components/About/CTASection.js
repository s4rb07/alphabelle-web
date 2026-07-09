import React from "react";
import { MapPin, Mail, Phone, Instagram } from "lucide-react";
import { useTranslations } from "next-intl";
import { BOOKING_URL } from "@/lib/config";

const CTASection = () => {
  const t = useTranslations("CTA");
	return (
		<section className="relative w-full min-h-[500px] flex flex-col justify-center items-center text-white overflow-hidden">
			<div
				className="absolute inset-0 z-0 bg-cover bg-center"
				style={{
					backgroundImage: 'url("/image/aboutus.png")',
				}}
			></div>

			<div className="relative z-10 max-w-4xl px-6 text-center flex flex-col items-center">
				<h2 className="text-xl md:text-3xl font-bold italic mb-6 tracking-tight">
					{t("title")}
				</h2>

				<p className="text-lg md:text-lg font-light leading-relaxed mb-10 max-w-2xl text-gray-200">
					{t("text")}
				</p>

				<button
					className="mt-1 bg-[#6b5e50] hover:bg-[#5a4e42] text-white text-sm font-semibold px-8 py-3 rounded-2xl transition-colors duration-200"
					type="submit"
				>
					<a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{t("buttonc")}</a>
				</button>
			</div>

			<div className="relative z-10 mt-16 w-full max-w-6xl px-6">
				<div className="flex flex-col items-center gap-6">
					<p className="text-sm font-bold uppercase tracking-[0.2em]">
						{t("text1")}
					</p>

					<div className="flex flex-wrap justify-center gap-8 md:gap-12 text-sm text-gray-300">
						<div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
							<MapPin size={18} />
							<span>2750 FM 1463 Suite 250, Katy, TX 77494</span>
						</div>
						<div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
							<Mail size={18} />
							<span>info@alphabellewellness.com</span>
						</div>
						<div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
							<Phone size={18} />
							<span>(281) 505-1331</span>
						</div>
						<div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
							<Instagram size={18} />
							<a
								href="https://www.instagram.com/alphabellewellness/"
								target="_blank"
								rel="noopener noreferrer"
							>
								alphabellewellness
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTASection;