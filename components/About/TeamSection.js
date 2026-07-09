import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Single ordered team grid. Photos live in /public/image/team. Copy
// (name/role/bio) is driven by the `Team` keys in messages/en.json + es.json.
// `license` is optional and shown under the role; add numbers as they arrive.
// Reorder the array to reorder the grid.
const team = [
	{ key: "m8", photo: "/image/team/jaime-morales.jpg", license: "Q9685", npi: "1588849475" }, // Jaime Morales
	{ key: "m1", photo: "/image/team/doctor-labcoat.jpg", license: "1088481", npi: "1871144584" }, // María Borjas
	{ key: "m2", photo: "/image/team/man-suit.jpg", license: "1226287" }, // Harold Navas
	{ key: "m4", photo: "/image/team/woman-scrubs-a.jpg", license: "ZP24525" }, // Mariana Armas
	{ key: "m5", photo: "/image/team/woman-tee.jpg", license: "2177002" }, // Karina Pérez
	{ key: "m6", photo: "/image/team/woman-scrubs-b.jpg", license: "ZP24479" }, // Rossi Romero
	{ key: "m7", photo: "/image/team/maria-perez.jpg" }, // María Pérez
	{ key: "m3", photo: "/image/team/man-scrubs.jpg" }, // Daniel Acevedo
];

const MemberCard = ({ member, tm, index, sizes }) => {
	const bio = tm(`${member.key}bio`);
	return (
		<figure
			data-aos="fade-up"
			data-aos-delay={index * 100}
			className="group text-center"
		>
			<div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand shadow-[0_18px_44px_-32px_rgba(42,37,33,0.55)]">
				<Image
					src={member.photo}
					alt={tm(`${member.key}name`)}
					fill
					sizes={sizes}
					className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
				/>
			</div>
			<figcaption className="mt-6">
				<h3 className="font-serif text-xl font-medium text-espresso">
					{tm(`${member.key}name`)}
				</h3>
				<p className="eyebrow mt-2 text-gold">{tm(`${member.key}role`)}</p>
				{member.license ? (
					<p className="mt-1 text-xs font-light tracking-wide text-espresso/45">
						{tm("licenseLabel")} #{member.license}
					</p>
				) : null}
				{member.npi ? (
					<p className="text-xs font-light tracking-wide text-espresso/45">
						NPI #{member.npi}
					</p>
				) : null}
				{bio ? (
					<p className="mx-auto mt-4 max-w-sm text-sm font-light leading-relaxed text-espresso/65">
						{bio}
					</p>
				) : null}
			</figcaption>
		</figure>
	);
};

const TeamSection = () => {
	const t = useTranslations("AboutPage");
	const tm = useTranslations("Team");

	return (
		<section className="bg-cream px-6 py-24 md:py-32">
			<div className="mx-auto max-w-6xl">
				<div className="mx-auto mb-16 max-w-2xl text-center" data-aos="fade-up">
					<p className="eyebrow text-gold">{t("teamEyebrow")}</p>
					<h2 className="mt-4 font-serif text-4xl font-light leading-tight text-espresso md:text-5xl">
						{t("teamTitle")}
					</h2>
					<div className="hairline mx-auto mt-7 w-24" />
					<p className="mt-7 text-base font-light leading-relaxed text-espresso/70">
						{t("teamIntro")}
					</p>
				</div>

				<div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
					{team.map((m, i) => (
						<div
							key={m.key}
							className="w-full sm:w-[calc((100%_-_2rem)/2)] lg:w-[calc((100%_-_4rem)/3)]"
						>
							<MemberCard
								member={m}
								tm={tm}
								index={i % 3}
								sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
