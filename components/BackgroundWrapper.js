import TestimonialsSection from "./Testimonials/TestimonialsSection";


const BackgroundWrapper = () => {
	return (
		<div
			className="relative w-full"
			style={{
				backgroundImage: "url('/image/city.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundAttachment: "fixed",
			}}
		>
			<div className="relative z-10">
				<TestimonialsSection />
			</div>
		</div>
	);
};

export default BackgroundWrapper;