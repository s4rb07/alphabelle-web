"use client";
import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { sendContactFormEmail } from "@/lib/actions";
import { useTranslations } from "next-intl";

const ContactSection = () => {
	const t = useTranslations("Contact");
	const tServices = useTranslations("Services");

	const [form, setForm] = useState({
		nombre: "",
		apellido: "",
		email: "",
		phone: "",
		servicio: "",
		message: "",
	});

	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	// Servicios dinámicos desde la traducción
	const services = Array.from({ length: 6 }, (_, i) => tServices(`s${i + 1}`));

	// Toasts
	const showSuccess = (msg) =>
		Toastify({
			text: msg,
			duration: 4000,
			gravity: "top",
			position: "right",
			style: { background: "linear-gradient(to right,#00b09b,#96c93d)" },
		}).showToast();

	const showError = (msg) =>
		Toastify({
			text: msg,
			duration: 4000,
			gravity: "top",
			position: "right",
			style: { background: "linear-gradient(to right,#ff5f6d,#ffc371)" },
		}).showToast();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");

		if (!form.nombre || !form.apellido || !form.email || !form.servicio) {
			showError(t("error"));
			return;
		}

		setIsLoading(true);
		try {
			const result = await sendContactFormEmail({
				nombre: form.nombre,
				apellido: form.apellido,
				correo: form.email,
				telefono: form.phone,
				servicio: form.servicio,
				mensaje: form.message, // <-- este faltaba
			});

			if (result.success) {
				showSuccess(t("successMessage"));
				setForm({
					nombre: "",
					apellido: "",
					email: "",
					phone: "",
					servicio: "",
					message: "",
				});
				setSubmitted(true);
			} else {
				setError(result.error || t("error"));
				showError(result.error || t("error"));
			}
		} catch (err) {
			console.error(err);
			setError(t("error"));
			showError(t("error"));
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<section
			id="contact"
			className="w-full py-16 px-6 md:px-20 bg-gradient-to-br from-[#4a443a] via-[#332f28] to-[#1a1814] text-white"
		>
			<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
				<div className="space-y-6">
					<div className="space-y-2">
						<h2 className="text-3xl md:text-4xl font-serif italic font-medium">
							{t("title")}
						</h2>
						<h3 className="text-xl md:text-2xl font-bold tracking-wider uppercase">
							{t("subTitle")}
						</h3>
					</div>
					<div>
						<p>{t("text")}</p>
					</div>
					<div>
						<p>{t("text1")}</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-6 pt-4 text-gray-200">
						<div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
							<Mail size={18} />
							<span>info@alphabellewellness.com</span>
						</div>
						<div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
							<Phone size={18} />
							<span>(281) 505-1331</span>
						</div>
					</div>
				</div>
				<div className="space-y-6">
					{submitted ? (
						<div className="flex items-center justify-center min-h-[320px]">
							<p className="text-white text-lg font-medium italic text-center">
								{t("successMessage")}
							</p>
						</div>
					) : (
						<form
							onSubmit={handleSubmit}
							className="grid grid-cols-1 md:grid-cols-2 gap-4"
						>
							{/* Nombre */}
							<div className="flex flex-col gap-1">
								<label className="text-xs font-semibold uppercase tracking-tighter">
									{t("name")}
								</label>
								<input
									type="text"
									name="nombre"
									value={form.nombre}
									onChange={handleChange}
									className="w-full p-3 bg-white text-black outline-none h-12 rounded-2xl"
								/>
							</div>

							<div className="flex flex-col gap-1">
								<label className="text-xs font-semibold uppercase tracking-tighter">
									{t("lastName")}
								</label>
								<input
									type="text"
									name="apellido"
									value={form.apellido}
									onChange={handleChange}
									className="w-full p-3 bg-white text-black outline-none h-12 rounded-2xl"
								/>
							</div>

							<div className="flex flex-col gap-1">
								<label className="text-xs font-semibold uppercase tracking-tighter">
									{t("email")}
								</label>
								<input
									type="email"
									name="email"
									value={form.email}
									onChange={handleChange}
									className="w-full p-3 bg-white text-black outline-none h-12 rounded-2xl"
								/>
							</div>
							<div className="flex flex-col gap-1">
								<label className="text-xs font-semibold uppercase tracking-tighter">
									{t("phone")}
								</label>
								<input
									type="tel"
									name="phone"
									value={form.phone}
									onChange={handleChange}
									className="w-full p-3 bg-white text-black outline-none h-12 rounded-2xl"
								/>
							</div>
							<div className="flex flex-col gap-1 md:col-span-2">
								<label className="text-xs font-semibold uppercase tracking-tighter">
									{t("service")}
								</label>
								<select
									name="servicio"
									value={form.servicio}
									onChange={handleChange}
									className="w-full p-3 bg-white text-black outline-none h-12 rounded-2xl"
									required
								>
									<option value="">{t("selectService")}</option>
									{services.map((s, i) => (
										<option key={i} value={s}>
											{s}
										</option>
									))}
								</select>
							</div>

							<div className="flex flex-col gap-1 md:col-span-2">
								<label className="text-xs font-semibold uppercase tracking-tighter">
									{t("message")}
								</label>
								<textarea
									rows="4"
									name="message"
									value={form.message}
									onChange={handleChange}
									className="w-full p-3 bg-white text-black outline-none resize-none rounded-2xl"
								/>
							</div>
							{error && (
								<p className="md:col-span-2 text-red-400 text-xs -mt-2">
									{error}
								</p>
							)}
							<div className="md:col-span-2 flex justify-center mt-4">
								<button
									type="submit"
									disabled={isLoading}
									className="mx-auto w-fit border-2 border-white px-10 py-3 rounded-2xl font-semibold hover:bg-white hover:text-black transition"
								>
									{isLoading ? t("sending") : t("buttonE")}
								</button>
							</div>
						</form>
					)}
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
