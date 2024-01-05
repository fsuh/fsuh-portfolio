import { SectionTitle, SkillsCard } from "../components";
import { skills } from "../data";
const Skills = () => {
	return (
		<section
			id="skills"
			className="bg-primary-content"
		>
			<div className="py-20 align-element">
				<SectionTitle text="tech stack" />
				<div className="py-16 grid gap-8 grid-cols-3 lg:grid-cols-5 lg:place-items-center md:grid-cols-4 md:place-items-center">
					{skills.map((skill) => {
						return (
							<SkillsCard
								key={skill.id}
								{...skill}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};
export default Skills;
