import fsuhLogo from "../assets/fsuh_logo.png";
import { socialLinks } from "../data";

const Footer = () => {
	return (
		<footer className="bg-base-100">
			<div className=" align-element py-4 grid grid-flow-row gap-y-4 place-items-center lg:footer items-center text-neutral-content">
				<aside className="place-items-center grid grid-flow-row lg:grid-flow-col lg:items-center">
					<img
						src={fsuhLogo}
						alt="logo"
						className="w-10 h-10"
					/>
					<p>
						<span>&copy;</span> {new Date().getFullYear()} - All right reserved
						by Fsuh.
					</p>
				</aside>
				<nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
					{socialLinks.map((link) => {
						const { id, href, download, title, icon } = link;
						if (title === "Github" || title === "LinkedIn") {
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
						}
						return;
					})}
				</nav>
			</div>
		</footer>
	);
};
export default Footer;
