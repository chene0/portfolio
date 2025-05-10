import { BiLogoPostgresql } from "react-icons/bi";
import {
	FaAws,
	FaDocker,
	FaJava,
	FaPython,
	FaReact,
	FaUnity,
	FaGithub,
	FaLinkedin,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
	SiCplusplus,
	SiCsharp,
	SiExpress,
	SiJira,
	SiLatex,
	SiMongodb,
} from "react-icons/si";

export const Sections: Section[] = [
	{
		title: "Welcome",
		destination: "top",
	},
	{
		title: "About me",
		destination: "about",
	},
	{
		title: "Skills",
		destination: "skills",
	},
	{
		title: "Projects",
		destination: "projects",
	},
	{
		title: "Awards",
		destination: "awards",
	},
	{
		title: "Connect",
		destination: "footer",
	},
];

export const Skills: Skill[] = [
	{
		name: "NextJS",
		destination: "https://nextjs.org/",
		icon: RiNextjsLine,
	},
	{
		name: "React",
		destination: "https://react.dev/",
		icon: FaReact,
	},
	{
		name: "Express",
		destination: "https://expressjs.com/",
		icon: SiExpress,
	},
	{
		name: "Tailwind",
		destination: "https://tailwindcss.com/",
		icon: RiTailwindCssFill,
	},
	{
		name: "Postgres",
		destination: "https://www.postgresql.org/",
		icon: BiLogoPostgresql,
	},
	{
		name: "MongoDB",
		destination: "https://www.mongodb.com/",
		icon: SiMongodb,
	},
	{
		name: "Python",
		destination: "https://www.python.org/",
		icon: FaPython,
	},
	{
		name: "C#",
		destination: "https://dotnet.microsoft.com/en-us/languages/csharp",
		icon: SiCsharp,
	},
	{
		name: "C++",
		destination: "https://isocpp.org/",
		icon: SiCplusplus,
	},
	{
		name: "Java",
		destination: "https://www.java.com/en/",
		icon: FaJava,
	},
	{
		name: "Unity3D",
		destination: "https://unity.com/",
		icon: FaUnity,
	},
	{
		name: "LaTeX",
		destination: "https://www.latex-project.org/",
		icon: SiLatex,
	},
	{
		name: "Docker",
		destination: "https://www.docker.com/",
		icon: FaDocker,
	},
	{
		name: "AWS",
		destination: "https://aws.amazon.com/",
		icon: FaAws,
	},
	{
		name: "Jira",
		destination: "https://www.atlassian.com/software/jira",
		icon: SiJira,
	},
];

export const Projects: Project[] = [
	{
		key: 0,
		thumbnail: "/geesehacks2025.png",
		thumbnail_alt: "GeeseHacks 2025",
		name: "GeeseTalk",
		description:
			"A web app dedicated to offering gamified isolated training of public speaking and social skills at the user's convenience. Developed at GeeseHacks 2025 with Evan He, Rijul Chaddha, and Lawrence Zou.",
		links: [
			{
				label: "Website",
				destination: "https://geese-hacks-project.vercel.app/",
			},
			{
				label: "Devpost",
				destination: "https://devpost.com/software/geesetalk",
			},
			{
				label: "Repository",
				destination: "https://github.com/RijulChaddha9504/GeeseHacks",
			},
		],
	},
	{
		key: 1,
		thumbnail: "/ece198.png",
		thumbnail_alt: "ECE 198",
		name: "Home Power Monitoring Device",
		description:
			"Configured and programmed two STM32F401RE boards in C to measure the power usage of an external device using a current transformer that is transmitted to a display board via UART. Developed with Matias Rivas and Gurvir Randhawa for ECE 198: Project Studio.",
		links: [],
	},
	{
		key: 2,
		thumbnail: "/portfolio.png",
		thumbnail_alt: "Portfolio",
		name: "This portfolio!",
		description: "Built with NextJS, React, and Tailwind.",
		links: [
			{
				label: "Repository",
				destination: "https://github.com/chene0/portfolio",
			},
		],
	},
	{
		key: 3,
		thumbnail: "/vance.png",
		thumbnail_alt: "Vance",
		name: "Vance",
		description:
			"Work through problem sets with this assistant that will narrow your focus to your areas of weakness.",
		links: [
			{ label: "Website", destination: "https://vance-phi.vercel.app/" },
			{ label: "Repository", destination: "https://github.com/chene0/vance" },
		],
	},
	{
		key: 4,
		thumbnail: "/focar.png",
		thumbnail_alt: "Focar",
		name: "Focar",
		description: "Interact with Todoist right from your desktop.",
		links: [
			{
				label: "Repository",
				destination: "https://github.com/chene0/focarapp",
			},
		],
	},
	{
		key: 5,
		thumbnail: "/pilon.jpg",
		thumbnail_alt: "Pilon",
		name: "Pilon",
		description:
			"Produce mathematical notation in real-time. Developed at Hack the North 2022 with Salman Youssef and Pravin Lohani.",
		links: [
			{ label: "Devpost", destination: "https://devpost.com/software/lon" },
			{
				label: "Repository",
				destination: "https://github.com/chene0/HackTheNorth",
			},
		],
	},
	{
		key: 6,
		thumbnail: "/fps.PNG",
		thumbnail_alt: "First Person Shooter",
		name: "Untitled First Person Shooter",
		description:
			"Rely on your audio and attentiveness to thrive in this eerie shooter.",
		links: [
			{
				label: "Repository",
				destination: "https://github.com/chene0/personal-project",
			},
		],
	},
];

export const Awards: Award[] = [
	{
		key: 0,
		date: "July 2024",
		award_name: "University of Waterloo President's Scholarship of Distinction",
		description:
			"Ended with an average of 95% or higher in my final year of high school",
	},
	{
		key: 1,
		date: "June 2024",
		award_name: "The Timothy Stiles Memorial Award",
		description:
			"Awarded for outstanding mathematical achievement in Senior School at Strathcona-Tweedsmuir School",
	},
	{
		key: 2,
		date: "June 2024",
		award_name:
			"The Dr. Dorothy Goldstein Memorial Prize for Senior School Science",
		description:
			"Awarded for outstanding performance in science courses throughout Senior School at Strathcona-Tweedsmuir School",
	},
	{
		key: 3,
		date: "December 2023",
		award_name:
			"Canadian Senior Mathematics Contest Certificate of Distinction",
		description:
			"Ranked in the top 25% of all contestants in the 2023 Canadian Senior Mathematics Contest hosted by the University of Waterloo",
	},
];

export const Socials: Social[] = [
	{
		name: "GitHub",
		destination: "https://github.com/chene0",
		icon: FaGithub,
	},
	{
		name: "LinkedIn",
		destination: "https://www.linkedin.com/in/chene0/",
		icon: FaLinkedin,
	},
	{
		name: "Email",
		destination: "mailto:e263chen@uwaterloo.ca",
		icon: MdEmail,
	},
];
