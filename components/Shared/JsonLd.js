// Renders a JSON-LD structured-data <script>. Server component.
export default function JsonLd({ data }) {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}
