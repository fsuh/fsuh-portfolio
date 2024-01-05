import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

interface IProjects {
	url: string;
	img: string;
	github: string;
	title: string;
	technology: string[];
	text: string;
}

const ProjectCard: React.FC<IProjects> = ({
	url,
	img,
	github,
	title,
	technology,
	text,
}) => {
	return (
		<article className="card bg-base-100 shadow-xl hover:shadow-2xl duration-300">
			<figure>
				<img
					src={img}
					alt={title}
					className="w-full object-cover h-64 rounded-t-lg"
				/>
			</figure>
			<div className="card-body p-8">
				<h2 className="card-title capitalize">{title}</h2>
				<p className="mt-2 leading-loose text-base-content">{text}</p>
				<p>
					{technology.map((tech, index) => {
						return (
							<span
								key={index}
								className="badge badge-info gap-2"
							>
								#{tech}
							</span>
						);
					})}
				</p>
				<div className="card-actions flex gap-x-4 mt-4">
					<a
						href={url}
						className="tooltip tooltip-bottom"
						data-tip="live link"
						target="_blank"
						rel="noreferrer"
					>
						<TbWorldWww className="h-8 w-8 text-primary hover:text-secondary duration-300" />
					</a>
					<a
						href={github}
						className="tooltip tooltip-bottom"
						data-tip="github link"
						target="_blank"
						rel="noreferrer"
					>
						<FaGithub className="h-8 w-8 text-primary hover:text-secondary duration-300" />
					</a>
				</div>
			</div>
		</article>
	);
};
export default ProjectCard;
