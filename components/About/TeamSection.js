import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Founders + team. Photos live in /public/image/team. Copy (name/role/bio) is
// driven by the `Team` keys in messages/en.json + es.json (m1..m6). Each `key`
// binds a photo to its copy; reorder the arrays to reorder the grid.
const founders = [
	{ key: "m3", photo: "/image/team/man-scrubs.jpg" }, // Daniel Acevedo
	{ key: "m4", photo: "/image/team/woman-scrubs-a.jpg" }, // Mariana Armas
];

const team = [
	{ key: "m5", photo: "/image/team/woman-tee.jpg" }, // Karina Pérez
	{ key: "m6", photo: "/image/team/woman-scrubs-b.jpg" }, // Rossi Romero
	{ key: "m1", photo: "/image/team/doctor-labcoat.jpg" }, // María Borjas
	{ key: "m2", photo: "/image/team/man-suit.jpg" }, // Harold Navas
	{ key: "m7", photo: "/image/team/maria-perez.jpg" }, // María Pérez
];

const MemberCard = ({ member, tm, featured, index, sizes }) => {
	const bio = tm(`${member.key}bio`);
	return (
		<figure
			data-aos="fade-up"
			data-aos-delay={index * 100}
			className="group text-center"
		>
			<div
				className={`relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand shadow-[0_18px_44px_-32px_rgba(42,37,33,0.55)] ${
					featured ? "ring-1 ring-gold/25" : ""
				}`}
			>
				<Image
					src={member.photo}
					alt={tm(`${member.key}name`)}
					fill
					sizes={sizes}
					className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
				/>
			</div>
			<figcaption className="mt-6">
				<h3
					className={`font-serif font-medium text-espresso ${
						featured ? "text-2xl" : "text-xl"
					}`}
				>
					{tm(`${member.key}name`)}
				</h3>
				<p className="eyebrow mt-2 text-gold">{tm(`${member.key}role`)}</p>
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

				{/* Founders */}
				<div className="mb-10 text-center" data-aos="fade-up">
					<p className="eyebrow text-espresso/40">{t("foundersEyebrow")}</p>
				</div>
				<div className="mx-auto grid max-w-3xl gap-x-10 gap-y-12 sm:grid-cols-2">
					{founders.map((m, i) => (
						<MemberCard
							key={m.key}
							member={m}
							tm={tm}
							featured
							index={i}
							sizes="(max-width:640px) 100vw, 360px"
						/>
					))}
				</div>

				{/* The team */}
				<div className="mb-10 mt-24 text-center" data-aos="fade-up">
					<p className="eyebrow text-espresso/40">{t("specialistsEyebrow")}</p>
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
