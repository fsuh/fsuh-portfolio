import { ProjectCard, SectionTitle } from "../components";
import { projects } from "../data";
const Projects = () => {
	return (
		<section id="projects">
			<div className="align-element py-20">
				<SectionTitle text="Web Creations" />
				<div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
					{projects.map((project) => {
						return (
							<ProjectCard
								key={project.id}
								{...project}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};
export default Projects;
