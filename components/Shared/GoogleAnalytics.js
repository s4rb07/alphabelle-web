import Script from "next/script";

// Google Analytics 4. Dormant until NEXT_PUBLIC_GA_ID is set in the environment
// (Vercel → Project → Settings → Environment Variables). No ID → renders nothing.
export default function GoogleAnalytics() {
	const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
	if (!GA_ID) return null;

	return (
		<>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
				strategy="afterInteractive"
			/>
			<Script id="ga-init" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${GA_ID}');
				`}
			</Script>
		</>
	);
}
