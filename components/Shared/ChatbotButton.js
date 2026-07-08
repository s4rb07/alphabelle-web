"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { MessageCircle, X, Send } from "lucide-react";

// Bilingual copy (kept local so it doesn't depend on the messages JSON)
const COPY = {
	en: {
		label: "Chat with us",
		title: "AlphaBelle Assistant",
		subtitle: "Typically replies in a few minutes",
		greeting: "Hi! 👋 How can we help you today?",
		placeholder: "Type your message…",
		// Placeholder reply until the AI backend is connected
		stub: "Thanks for your message! Our team will get back to you shortly.",
	},
	es: {
		label: "Chatea con nosotros",
		title: "Asistente AlphaBelle",
		subtitle: "Normalmente responde en minutos",
		greeting: "¡Hola! 👋 ¿En qué podemos ayudarte hoy?",
		placeholder: "Escribe tu mensaje…",
		stub: "¡Gracias por tu mensaje! Nuestro equipo te responderá en breve.",
	},
};

export default function ChatbotButton() {
	const locale = useLocale();
	const t = COPY[locale] ?? COPY.en;

	const [open, setOpen] = useState(false);
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([{ from: "bot", text: t.greeting }]);
	const endRef = useRef(null);

	useEffect(() => {
		if (open) endRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, open]);

	const handleSend = (e) => {
		e.preventDefault();
		const text = input.trim();
		if (!text) return;
		setInput("");
		setMessages((m) => [...m, { from: "user", text }]);

		// TODO: wire to the real AI backend here (e.g. POST to your n8n webhook /
		// chatbot endpoint and append the response). For now we show a placeholder.
		setTimeout(() => {
			setMessages((m) => [...m, { from: "bot", text: t.stub }]);
		}, 600);
	};

	return (
		<div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
			{/* Chat panel */}
			{open && (
				<div className="flex h-[28rem] w-[20rem] flex-col overflow-hidden rounded-2xl border border-stone/40 bg-cream shadow-[0_24px_60px_-20px_rgba(42,37,33,0.6)] sm:w-[22rem]">
					{/* Header */}
					<div className="flex items-center justify-between bg-espresso px-4 py-3 text-cream">
						<div className="flex items-center gap-2.5">
							<span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-espresso">
								<MessageCircle size={17} />
							</span>
							<div className="leading-tight">
								<p className="font-serif text-base">{t.title}</p>
								<p className="text-[11px] text-cream/60">{t.subtitle}</p>
							</div>
						</div>
						<button
							onClick={() => setOpen(false)}
							aria-label="Close chat"
							className="text-cream/70 transition-colors hover:text-cream"
						>
							<X size={18} />
						</button>
					</div>

					{/* Messages */}
					<div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
						{messages.map((m, i) => (
							<div
								key={i}
								className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
							>
								<p
									className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
										m.from === "user"
											? "rounded-br-sm bg-espresso text-cream"
											: "rounded-bl-sm bg-sand text-espresso"
									}`}
								>
									{m.text}
								</p>
							</div>
						))}
						<div ref={endRef} />
					</div>

					{/* Input */}
					<form
						onSubmit={handleSend}
						className="flex items-center gap-2 border-t border-stone/40 bg-white px-3 py-2.5"
					>
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder={t.placeholder}
							className="flex-1 bg-transparent px-1 text-sm text-espresso placeholder:text-espresso/40 focus:outline-none"
						/>
						<button
							type="submit"
							aria-label="Send"
							className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-espresso transition-colors hover:bg-champagne disabled:opacity-40"
							disabled={!input.trim()}
						>
							<Send size={15} />
						</button>
					</form>
				</div>
			)}

			{/* Floating pill button — always visible */}
			<button
				onClick={() => setOpen((o) => !o)}
				aria-label={t.label}
				className="group flex items-center gap-3 rounded-full bg-espresso py-3 pl-3 pr-5 text-cream shadow-[0_10px_30px_-6px_rgba(42,37,33,0.55)] ring-1 ring-gold/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-6px_rgba(176,141,87,0.55)]"
			>
				<span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-espresso transition-transform duration-300 group-hover:scale-105">
					{open ? <X size={19} /> : <MessageCircle size={19} />}
				</span>
				<span className="text-sm font-semibold tracking-wide">{t.label}</span>
			</button>
		</div>
	);
}
