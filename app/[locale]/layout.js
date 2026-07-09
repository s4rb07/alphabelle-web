import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import 'toastify-js/src/toastify.css';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer.";
import ChatbotButton from "@/components/Shared/ChatbotButton";
import FloatingContact from "@/components/Shared/FloatingContact";
import ShopPopup from "@/components/Shared/ShopPopup";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { AOSInit } from "@/aos"
import JsonLd from "@/components/Shared/JsonLd";
import GoogleAnalytics from "@/components/Shared/GoogleAnalytics";
import { SITE_URL, localBusinessJsonLd } from "@/lib/seo";


const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-montserrat",
	display: "swap",
});

const cormorant = Cormorant_Garamond({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	variable: "--font-cormorant",
	display: "swap",
});

export const metadata = {
	metadataBase: new URL(SITE_URL),
	title: "AlphaBelle Wellness — Regenerative Medicine & Aesthetics",
	description:
		"We have designed a space where regenerative medicine and high-end aesthetics converge to empower the best version of our patients.",
	icons: {
		icon: ["/favicon.ico"], // Ruta a tu favicon
	},
};

export default async function LocaleLayout({ children, params }) {
	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	return (
		<html lang={params.locale} className={`${montserrat.variable} ${cormorant.variable}`}>
			<AOSInit />
			<body className="max-w-max min-w-min mx-auto bg-cream font-sans text-espresso antialiased">
				<GoogleAnalytics />
				<JsonLd data={localBusinessJsonLd(params.locale)} />
				<NextIntlClientProvider messages={messages}>
					<Header />
					<div className="max-w-max m-auto overflow-hidden w-full">
						{children}
					</div>
					<Footer />
					<ChatbotButton />
					<FloatingContact />
					<ShopPopup />
				</NextIntlClientProvider>
				
			</body>
		</html>
	);
}
