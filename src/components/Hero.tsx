import heroImage from "../assets/heroImage12.svg";
import { socialLinks } from "../data";

const Hero = () => {
	return (
		<div className="bg-primary-content py-24">
			<div className="align-element grid md:grid-cols-2 items-center gap-8">
				<article>
					<h1 className="text-2xl font-semibold stat-title text-base-content">
						<span>&#128075;&#127998;</span> Hello!
					</h1>
					<h1 className="text-7xl font-bold tracking-wider text-primary ">
						I'm <em>Fuh Suh</em>
					</h1>
					<p className="mt-4 text-3xl text-secondary capitalize tracking-wide">
						Full stack web developer
					</p>
					<p className="mt-2 text-lg text-base-content capitalize tracking-wide">
						Transforming ideas into digital reality
					</p>
					<div className="flex gap-x-4 mt-4">
						{socialLinks.map((link) => {
							const { id, href, download, title, icon } = link;
							return (
								<a
									key={id}
									href={href}
									data-tip={title}
									download={download}
									target="_blank"
									rel="noreferrer"
									className="tooltip tooltip-bottom"
								>
									{icon}
								</a>
							);
						})}
					</div>
				</article>
				<article className="hidden md:block">
					<img
						src={heroImage}
						alt="hero image"
						className="h-80 lg:h-96 rounded-lg"
					/>
				</article>
			</div>
		</div>
	);
};
export default Hero;
