"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { MapPin, Mail, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";
import { BOOKING_URL } from "@/lib/config";

function TikTokIcon({ size = 16 }) {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
			<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
		</svg>
	);
}

const SOCIALS = [
	{ Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/alphabellewellness/" },
	{ Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/alphabellewellness" },
	{ Icon: TikTokIcon, label: "TikTok", href: "https://www.tiktok.com/@alphabellewellness" },
	{ Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/alphabellewellness" },
];

export default function Footer() {
	const t = useTranslations("Footer");
	const locale = useLocale();

	return (
		<footer className="w-full bg-[#f2f0e9] border-t border-[#e0dcd2] px-8 md:px-16 py-10">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
				<div className="flex flex-col items-center gap-4">
					<Image
						src="/image/logo.png"
						alt="Logo"
						width={284}
						height={226}
						priority
					/>
					<div className="flex items-center gap-3">
						{SOCIALS.map(({ Icon, label, href }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={label}
								title={label}
								className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d8d3c7] text-[#6b5e50] transition-colors duration-200 hover:border-[#6b5e50] hover:bg-[#6b5e50] hover:text-white"
							>
								<Icon size={16} />
							</a>
						))}
					</div>
				</div>
				<div className="flex flex-col items-center gap-4 text-center">
					<p className="text-xs tracking-[0.2em] uppercase text-[#888]">
						{t("title")}
					</p>
					<p className="text-sm text-[#333] leading-relaxed max-w-xs">
						<strong className="font-bold">{t("textBold")} </strong>
						{t("text")}
					</p>
					<button
						className="mt-1 bg-[#6b5e50] hover:bg-[#5a4e42] text-white text-sm font-semibold px-8 py-3 rounded-2xl transition-colors duration-200"
						type="submit"
					>
						<a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{t("buttonc")}</a>
					</button>
					<a
						href={`/${locale}/faq`}
						className="text-xs tracking-[0.15em] uppercase text-[#888] underline-offset-4 hover:text-[#1a1a1a] hover:underline transition-colors"
					>
						{t("faqLink")}
					</a>
				</div>
				<div className="flex flex-col items-center gap-3">
					<p className="text-xs tracking-[0.2em] uppercase text-[#888] mb-1">
						{t("text1")}
					</p>
					<ul className="flex flex-col gap-2">
						{[
							{
								icon: <MapPin size={14} />,
								label: "2750 FM 1463 Suite 250, Katy, TX 77494",
							},
							{
								icon: <Mail size={14} />,
								label: "info@alphabellewellness.com",
							},
							{ icon: <Phone size={14} />, label: "(281) 505-1331" },
						].map(({ icon, label, href }) => (
							<li
								key={label}
								className="flex items-center gap-2 text-sm text-[#444] hover:text-[#1a1a1a] cursor-pointer transition-colors duration-150"
							>
								<span className="text-[#888]">{icon}</span>
								<a href={href} target="_blank" rel="noopener noreferrer">
									{label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
}