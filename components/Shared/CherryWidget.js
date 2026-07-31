import Script from "next/script";

// Cherry patient-financing floating estimator ("Pay over time" pill, bottom-right).
// Replicated 1:1 from the live deployment (31 jul 2026) so repo deploys don't drop it.
// Note: `language` is hardcoded to 'en' on live, even under /es — kept as-is on purpose.
const CHERRY_SNIPPET = `
	(function (w, d, s, o, f, js, fjs) {
		w[o] = w[o] || function () {
			(w[o].q = w[o].q || []).push(arguments);
		};
		(js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
		js.id = o;
		js.src = f;
		js.async = 1;
		fjs.parentNode.insertBefore(js, fjs);
	})(window, document, "script", "_hw", "https://files.withcherry.com/widgets/widget.js");
	_hw("init", {
		debug: false,
		variables: {
			slug: 'alphabelle-wellness',
			name: "AlphaBelle Wellness",
			images: [37],
			customLogo: '',
			defaultPurchaseAmount: 1000,
			customImage: '',
			imageCategory: 'aesthetics',
			language: 'en',
		},
		styles: {
			primaryColor: '#2a2521',
			secondaryColor: '#2a252110',
			fontFamily: 'Montserrat',
			headerFontFamily: 'Montserrat',
			floatingEstimator: {
				position: 'bottom-right',
				offset: {
					x: '0px',
					y: '0px'
				},
				zIndex: 9999,
				ctaFontFamily: 'Montserrat',
				bodyFontFamily: 'Montserrat',
				ctaColor: '#2a2521',
				ctaTextColor: '#FFFFFF'
			}
		}
	}, ['floatingEstimator']);
`;

export default function CherryWidget() {
	return (
		<Script id="cherry-widget" strategy="afterInteractive">
			{CHERRY_SNIPPET}
		</Script>
	);
}
