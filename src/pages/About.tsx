import { SectionTitle } from "../components";
import aboutImg from "../assets/aboutMe.jpg";
import { meDetails } from "../data";
const About = () => {
	return (
		<section
			id="about"
			className="bg-base-100"
		>
			<div className="align-element py-20 grid md:grid-cols-2 items-center gap-16">
				<img
					src={aboutImg}
					alt="my photo"
					className="rounded-full w-full h-auto"
				/>
				<article>
					<SectionTitle text="About Me" />
					<p className="text-base-content mt-8 leading-loose">
						{meDetails.about}
					</p>
				</article>
			</div>
		</section>
	);
};
export default About;
