import { nanoid } from "nanoid";
import {
	FaJs,
	FaReact,
	FaAws,
	FaDev,
	FaNode,
	FaFigma,
	FaDocker,
} from "react-icons/fa";

import {
	SiTypescript,
	SiKubernetes,
	SiMongodb,
	SiFirebase,
	SiMariadb,
	SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import { TiHtml5 } from "react-icons/ti";
import fsuhCMS from "./assets/fsuh_cms.png";
import fsuhShop from "./assets/fsuh_shop.png";
import fsuhGithubUsers from "./assets/GitHubUser.png";
//import fsuhAtlas from "./assets/fsuh_worldAtlas.png";
//import fsuhHospital from "./assets/fsuh_HospitalFinder.png";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
export const menulinks = [
	{ id: nanoid(), href: "home", text: "home" },
	{ id: nanoid(), href: "about", text: "about" },
	{ id: nanoid(), href: "skills", text: "skills" },
	{ id: nanoid(), href: "projects", text: "projects" },
	{ id: nanoid(), href: "contact", text: "contact" },
];

export const skills = [
	{
		id: nanoid(),
		title: "Figma",
		icon: <FaFigma className="h-16 w-16 text-primary" />,
	},
	{
		id: nanoid(),
		title: "HTML&CSS",
		icon: <TiHtml5 className="h-16 w-16 text-primary" />,
	},
	{
		id: nanoid(),
		title: "TailwindCss",
		icon: <SiTailwindcss className="h-16 w-16 text-primary" />,
	},
	{
		id: nanoid(),
		title: "Javascript",
		icon: <FaJs className="h-16 w-16 text-primary" />,
	},
	{
		id: nanoid(),
		title: "Typescript",
		icon: <SiTypescript className="h-16 w-16 text-primary" />,
	},
	{
		id: nanoid(),
		title: "React",
		icon: <FaReact className="h-16 w-16 text-primary" />,
	},
	{
		id: nanoid(),
		title: "NextJS",
		icon: <TbBrandNextjs className="h-16 w-16 text-primary" />,
	},
	{
		id: nanoid(),
		title: "NodeJS",
		icon: <FaNode className="h-16 w-16 text-primary" />,
	},
	{
		id: nanoid(),
		title: "Firebase",
		icon: <SiFirebase className="h-16 w-16 text-primary" />,
	},
	{
		id: nanoid(),
		title: "Mongodb",
		icon: <SiMongodb className="h-16 w-16 text-primary" />,
	},
	{
		id: nanoid(),
		title: "Mariadb",
		icon: <SiMariadb className="h-16 w-16 text-primary" />,
	},
	{
		id: nanoid(),
		title: "AWS",
		icon: <FaAws className="h-16 w-16 text-primary" />,
	},
	{
		id: nanoid(),
		title: "DevOps",
		icon: <FaDev className="h-16 w-16 text-primary" />,
	},
	{
		id: nanoid(),
		title: "Docker",
		icon: <FaDocker className="h-16 w-16 text-primary" />,
	},
	{
		id: nanoid(),
		title: "Kubenetes",
		icon: <SiKubernetes className="h-16 w-16 text-primary" />,
	},
];

export const socialLinks = [
	{
		id: nanoid(),
		title: "Github",
		href: "https://github.com/fsuh/",
		icon: (
			<FaGithub className="h-8 w-8 text-primary hover:text-secondary duration-300" />
		),
	},
	{
		id: nanoid(),
		title: "LinkedIn",
		href: "www.linkedin.com/in/fuhsuh",
		icon: (
			<FaLinkedin className="h-8 w-8 text-primary hover:text-secondary duration-300" />
		),
	},
	{
		id: nanoid(),
		title: "Email_me",
		href: "mailto:tofuhsuh@gmail.com",
		icon: (
			<MdContactMail className="h-8 w-8 text-primary hover:text-secondary duration-300" />
		),
	},
	{
		id: nanoid(),
		title: "Resume",
		href: "/fuhSuhResume.pdf",
		icon: (
			<FaDownload className="h-8 w-8 text-primary hover:text-secondary duration-300" />
		),
		download: true,
	},
];

export const projects = [
	{
		id: nanoid(),
		img: fsuhCMS,
		url: "https://fsuh-deployed-projects.netlify.app/",
		github: "https://github.com/fsuh/DeployedProjects",
		title: "Project Headless CMS",
		technology: ["vite", "HTML", "css", "JavaScript"],
		text: "This is headless CMS site where I host all projects I deploy.",
	},
	{
		id: nanoid(),
		img: fsuhShop,
		url: "https://fsuh-shop.netlify.app/",
		github: "https://github.com/fsuh/fsuh-shop",
		title: "Alkebulan Shop",
		technology: [
			"vite",
			"typeScript",
			"react query",
			"react redux",
			"daisyUI",
			"tailwindCss",
			"reactRouterDom",
		],
		text: "I created this project as a sample E-commerce web app. This enable me to learn different features important for an e-commerce such as ordering and checkout.",
	},
	{
		id: nanoid(),
		img: fsuhGithubUsers,
		url: "https://fsuh-githubusers-search.netlify.app/",
		github: "https://github.com/fsuh/gitHubUsers_Search",
		title: "Github Users Search",
		technology: [
			"vite",
			"typeScript",
			"react query",
			"react redux",
			"daisyUI",
			"tailwindCss",
			"reactRouterDom",
			"Auth0",
		],
		text: "With this web app, you can search and learn a few details about github users. This is a tutorial project, but I tackled it differently with newer technologies and libraries",
	},
	// {
	// 	id: nanoid(),
	// 	img: fsuhHospital,
	// 	url: "https://finland-hospital-finder.onrender.com/",
	// 	github: "https://github.com/fsuh/HospitalGPS",
	// 	title: "Nuring Home Search Finland",
	// 	technology: ["react", "javaScript", "nodeJs", "mongodb", "Css"],
	// 	text: "This is a web app specific for users in Finland. It can be used to search for nursing homes anywere in Finland. I used an API from MoH. This project is yet to be complete with all its features. ",
	// },
	// {
	// 	id: nanoid(),
	// 	img: fsuhAtlas,
	// 	url: "https://fsuh-atlas.netlify.app/landing",
	// 	github: "https://github.com/fsuh/countries_App",
	// 	title: "World Atlas",
	// 	technology: [
	// 		"react",
	// 		"javaScript",
	// 		"Firebase authentication",
	// 		"Redux TK",
	// 		"React Bootstrap",
	// 	],
	// 	text: "Learn about the different countries in the world using this web app. The motivation for this app was about learning how use the restCountries API and weather API",
	// },
];

export const meDetails = {
	id: nanoid(),
	name: "Fuh Suh",
	title: "Full stack Web Developer",
	about:
		"I am a Full Stack Web Developer with 5 years' experience in HTML, CSS, JavaScript, ReactJs, NodeJs, and NextJs. I excel in designing and building scalable web applications, leveraging AWS CI/CD tools and DevOps practices with Docker, Kubernetes, and IaC tools. My passion for coding, coupled with a commitment to continuous learning, drives my pursuit of excellence. Actively seeking a Junior Full-Stack Web Developer role to contribute my extensive skills and enthusiasm to a dynamic software company. With a strong healthcare background, I offer refined soft skills, analytical prowess, and a solution-oriented mindset.",
};
