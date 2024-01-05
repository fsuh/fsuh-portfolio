import { Navbar, Hero } from "../components";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
const Home = () => {
	return (
		<>
			<header>
				<Navbar />
				<Hero />
			</header>
			<main>
				<About />

				<Skills />

				<Projects />

				<Contact />
			</main>
			<Footer />
		</>
	);
};
export default Home;
