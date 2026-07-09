"use client";

import React, { useEffect } from "react";
import { useTranslations } from "next-intl";
import { BOOKING_URL } from "@/lib/config";

const SERVICE_CONFIG = {
	1: {
		sections: [
			{ labelKey: "text1", items: ["d11", "d12", "d13", "d14"] },
			{ labelKey: "text12", items: [] },
		],
	},
	2: {
		sections: [
			{ labelKey: "text22", items: ["d21", "d22", "d23", "d24", "d25", "d26"] },
			{ labelKey: "text23", items: ["d27", "d28"] },
			{ labelKey: "text2", items: [] },
		],
	},
	3: {
		sections: [
			{ labelKey: null, items: ["d31", "d32", "d33", "d34"] },
			{ labelKey: "text3", items: ["d35", "d36", "d37", "d38"] },
		],
	},
	4: {
		sections: [
			{ labelKey: "text4", items: ["d41", "d42", "d43", "d44"] },
			{ labelKey: "text42", items: [] },
			{ labelKey: "text43", items: [] },
			{ labelKey: "text44", items: [] },
		],
	},
	5: {
		sections: [
			{ labelKey: "text5", items: [], note: "text54" },
			{ labelKey: "text52", items: ["d50", "d51", "d52", "d53"] },
			{ labelKey: "text53", items: ["d54", "d55", "d56", "d57", "d58"] },
		],
	},
	6: {
		sections: [
			{ labelKey: "text6", items: ["d61", "d62", "d63", "d64"] },
			{ labelKey: "text62", items: [] },
			{ labelKey: "text63", items: [] },
		],
	},
	7: {
		sections: [{ labelKey: "text71", items: ["d71", "d72", "d73", "d74"] }],
	},
	8: {
		sections: [
			{ labelKey: "text8", items: ["d81"] },
			
		],
	},
	9: {
		sections: [
			{ labelKey: "text9", items: ["d91"] },
		],
	},
	10: {
		sections: [
			{ labelKey: "text10", items: ["d101"] },
			{ labelKey: "text11", items: [] },
		],
	}

};

export default function ServiceModal({ serviceIndex, onClose }) {
	const t = useTranslations("Services");

	useEffect(() => {
		const handleKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		document.addEventListener("keydown", handleKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", handleKey);
			document.body.style.overflow = "";
		};
	}, [onClose]);

	const config = SERVICE_CONFIG[serviceIndex];
	if (!config) return null;

	const title = t(`s${serviceIndex}`);
	const description = t(`descripcion${serviceIndex}`);

	return (
		<>
			<style>{`
				@keyframes ab-fadeIn  { from { opacity: 0 } to { opacity: 1 } }
				@keyframes ab-slideUp { from { opacity: 0; transform: translateY(22px) scale(0.98) } to { opacity: 1; transform: translateY(0) scale(1) } }
				.ab-overlay { animation: ab-fadeIn  0.22s ease; }
				.ab-modal   { animation: ab-slideUp 0.3s cubic-bezier(0.16,1,0.3,1); }
				.ab-close:hover   { background-color: #1a1a1a !important; color: #f2f0e9 !important; }
				.ab-cta-btn:hover { background-color: #333 !important; transform: translateY(-1px); }
				.ab-benefit:hover { transform: translateX(4px); }
			`}</style>

			<div
				className="ab-overlay fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[rgba(20,18,14,0.55)] backdrop-blur-sm"
				onClick={(e) => {
					if (e.target === e.currentTarget) onClose();
				}}
			>
				<div
					className="ab-modal w-full max-w-[560px] max-h-[88vh] overflow-y-auto rounded-[22px] bg-[#f2f0e9] shadow-[0_24px_64px_rgba(0,0,0,0.18)]"
					onClick={(e) => e.stopPropagation()}
				>
					<div className="relative bg-white rounded-t-[22px] px-7 pt-7 pb-6 border-b border-[#e8e5db]">
						
						<p className="text-[10px] tracking-[0.3em] uppercase text-[#bbb] mb-1.5">
							{t("subtitle")}
						</p>

						<h2 className="text-xl font-bold italic text-[#1a1a1a] leading-snug pr-10">
							{title}
						</h2>
						<button
							className="ab-close absolute top-5 right-5 w-8 h-8 rounded-full bg-[#ede9df] flex items-center justify-center text-[#555] transition-colors duration-150 border-none cursor-pointer"
							onClick={onClose}
						>
							<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
								<path
									d="M1 1L11 11M11 1L1 11"
									stroke="currentColor"
									strokeWidth="1.8"
									strokeLinecap="round"
								/>
							</svg>
						</button>
					</div>
					<div className="px-7 py-6 flex flex-col gap-5">	
						<p className="text-sm text-[#666] leading-[1.75]">{description}</p>
						{config.sections.map((section, si) => {
							const hasItems = section.items?.length > 0;
							const labelText = section.labelKey ? t(section.labelKey) : null;
							const noteText = section.note ? t(section.note) : null;
							if (!labelText && !hasItems && !noteText) return null;
							return (
								<div key={si} className="flex flex-col gap-2">
									{labelText && (
										<p className="text-[9px] tracking-[0.25em] uppercase text-[#aaa]">
											{labelText}
										</p>
									)}

									{noteText && (
										<p className="text-[13px] text-[#555] leading-relaxed">
											{noteText}
										</p>
									)}
									{hasItems && (
										<ul className="flex flex-col gap-2 list-none">
											{section.items.map((key, ii) => {
												const text = t(key);
												if (!text || text === key) return null;
												return (
													<li
														key={ii}
														className="ab-benefit flex items-start gap-2.5 text-[13px] text-[#333] leading-[1.5] transition-transform duration-[180ms] ease-in-out"
													>
														<span className="shrink-0 w-5 h-5 rounded-full bg-[#1a1a1a] text-[#f2f0e9] text-[10px] font-bold flex items-center justify-center mt-px">
															{ii + 1}
														</span>
														{text}
													</li>
												);
											})}
										</ul>
									)}
								</div>
							);
						})}

						<div className="mt-2 bg-white border border-[#e4e0d5] rounded-[14px] p-5 flex items-center justify-between gap-4 flex-wrap">
							<div>
								<p className="text-sm font-medium text-[#1a1a1a]">
									{t("texts1")}
								</p>
								<p className="text-xs text-[#999] mt-0.5">{t("texts2")}</p>
							</div>
							<button className="ab-cta-btn bg-[#1a1a1a] text-[#f2f0e9] rounded-[10px] px-5 py-2.5 text-xs font-semibold tracking-[0.06em] cursor-pointer whitespace-nowrap transition-all duration-150 border-none">
							
							<a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"> {t("buttons1")}</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
