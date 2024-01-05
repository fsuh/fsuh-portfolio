import { menulinks } from "../data";
const NavLinks = () => {
	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		} else if (sectionId === "home") {
			window.location.href = "/";
		} else {
			window.location.href = `/#${sectionId}`;
		}
	};
	return (
		<>
			{menulinks.map((link) => {
				const { id, href, text } = link;
				return (
					<li
						key={id}
						className="capitalize"
					>
						<a
							// href={href}
							onClick={() => scrollToSection(href)}
						>
							{text}
						</a>
					</li>
				);
			})}
		</>
	);
};
export default NavLinks;
