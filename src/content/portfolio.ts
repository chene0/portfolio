import { BiLogoPostgresql } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";
import {
  FaAws,
  FaDocker,
  FaJava,
  FaPython,
  FaReact,
  FaUnity,
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaDev,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {
  RiAngularjsFill,
  RiNextjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiCplusplus,
  SiCsharp,
  SiDotnet,
  SiExpress,
  SiMongodb,
  SiFastapi,
  SiSqlalchemy,
  SiPytest,
  SiPhp,
  SiSymfony,
} from "react-icons/si";

export const Sections: Section[] = [
  {
    title: "Welcome",
    destination: "top",
  },
  {
    title: "Skills",
    destination: "skills",
  },
  {
    title: "Experience",
    destination: "experiences",
  },
  {
    title: "Extracurriculars",
    destination: "extracurriculars",
  },
  {
    title: "Projects",
    destination: "projects",
  },
  {
    title: "Awards",
    destination: "awards",
  },
];

// Individual skill variables
export const SKILL_NEXTJS: Skill = {
  name: "NextJS",
  destination: "https://nextjs.org/",
  icon: RiNextjsLine,
};

export const SKILL_REACT: Skill = {
  name: "React",
  destination: "https://react.dev/",
  icon: FaReact,
};

export const SKILL_ANGULARJS: Skill = {
  name: "AngularJS",
  destination: "https://angularjs.org/",
  icon: RiAngularjsFill,
};

export const SKILL_DOTNET: Skill = {
  name: ".NET",
  destination: "https://dotnet.microsoft.com/en-us/",
  icon: SiDotnet,
};

export const SKILL_EXPRESS: Skill = {
  name: "Express",
  destination: "https://expressjs.com/",
  icon: SiExpress,
};

export const SKILL_TAILWIND: Skill = {
  name: "Tailwind",
  destination: "https://tailwindcss.com/",
  icon: RiTailwindCssFill,
};

export const SKILL_POSTGRES: Skill = {
  name: "Postgres",
  destination: "https://www.postgresql.org/",
  icon: BiLogoPostgresql,
};

export const SKILL_SQLSERVER: Skill = {
  name: "SQL Server",
  destination: "https://www.microsoft.com/en-us/sql-server",
  icon: DiMsqlServer,
};

export const SKILL_MONGODB: Skill = {
  name: "MongoDB",
  destination: "https://www.mongodb.com/",
  icon: SiMongodb,
};

export const SKILL_PYTHON: Skill = {
  name: "Python",
  destination: "https://www.python.org/",
  icon: FaPython,
};

export const SKILL_CSHARP: Skill = {
  name: "C#",
  destination: "https://dotnet.microsoft.com/en-us/languages/csharp",
  icon: SiCsharp,
};

export const SKILL_CPP: Skill = {
  name: "C++",
  destination: "https://isocpp.org/",
  icon: SiCplusplus,
};

export const SKILL_JAVA: Skill = {
  name: "Java",
  destination: "https://www.java.com/en/",
  icon: FaJava,
};

export const SKILL_UNITY: Skill = {
  name: "Unity3D",
  destination: "https://unity.com/",
  icon: FaUnity,
};

export const SKILL_DOCKER: Skill = {
  name: "Docker",
  destination: "https://www.docker.com/",
  icon: FaDocker,
};

export const SKILL_AWS: Skill = {
  name: "AWS",
  destination: "https://aws.amazon.com/",
  icon: FaAws,
};

export const SKILL_FASTAPI: Skill = {
  name: "FastAPI",
  destination: "https://fastapi.tiangolo.com/",
  icon: SiFastapi,
};

export const SKILL_SQLALCHEMY: Skill = {
  name: "SQLAlchemy",
  destination: "https://www.sqlalchemy.org/",
  icon: SiSqlalchemy,
};

export const SKILL_PYTEST: Skill = {
  name: "Pytest",
  destination: "https://pytest.org/",
  icon: SiPytest,
};

export const SKILL_PHP: Skill = {
  name: "PHP",
  destination: "https://www.php.net/",
  icon: SiPhp,
};

export const SKILL_SYMFONY: Skill = {
  name: "Symfony",
  destination: "https://symfony.com/",
  icon: SiSymfony,
};

// Skills array referencing the variables
export const Skills: Skill[] = [
  SKILL_NEXTJS,
  SKILL_REACT,
  SKILL_ANGULARJS,
  SKILL_DOTNET,
  SKILL_EXPRESS,
  SKILL_TAILWIND,
  SKILL_POSTGRES,
  SKILL_SQLSERVER,
  SKILL_MONGODB,
  SKILL_PYTHON,
  SKILL_CSHARP,
  SKILL_CPP,
  SKILL_JAVA,
  SKILL_UNITY,
  SKILL_DOCKER,
  SKILL_AWS,
  SKILL_FASTAPI,
  SKILL_SQLALCHEMY,
  SKILL_PYTEST,
  SKILL_PHP,
  SKILL_SYMFONY,
];

export const Experiences: Experience[] = [
  {
    key: 0,
    role: "Software Engineer Intern",
    company: "Pratt & Whitney",
    location: "Mississauga, Ontario",
    location_type: "Onsite",
    company_link: "https://prattwhitney.com/",
    company_logo: "/experience_logos/pratt_whitney.jpg",
    company_logo_alt: "Pratt & Whitney Logo",
    start_date: new Date(2026, 0),
    end_date: new Date(2026, 3),
    technologies: [],
  },
  {
    key: 1,
    role: "Full Stack Developer Co-op",
    company: "BTNX Inc.",
    location: "Pickering, Ontario",
    location_type: "Onsite",
    company_link: "https://btnx.com/",
    company_logo: "/experience_logos/btnx.jpg",
    company_logo_alt: "BTNX Inc. Logo",
    start_date: new Date(2025, 5),
    end_date: new Date(2025, 7),
    technologies: [],
  },
];

export const Extracurriculars: Experience[] = [
  {
    key: 0,
    role: "Project Developer",
    company: "UW Blueprint",
    location: "Waterloo, Ontario",
    location_type: "Hybrid",
    company_link: "https://uwblueprint.org/",
    company_logo: "/extracurricular_logos/uwbp.jpg",
    company_logo_alt: "UW Blueprint Logo",
    start_date: new Date(2025, 8),
    end_date: "Present",
    technologies: [],
  },
  {
    key: 1,
    role: "Organizer (Frontend Developer)",
    company: "FormulaTech Hacks",
    location: "Waterloo, Ontario",
    location_type: "Remote",
    company_link: "https://www.linkedin.com/company/formulatech-hacks/",
    company_logo: "/extracurricular_logos/fthacks.jpg",
    company_logo_alt: "FormulaTech Hacks Logo",
    start_date: new Date(2025, 3),
    end_date: "Present",
    technologies: [],
  },
  {
    key: 2,
    role: "Firmware Developer",
    company: "First Tech Challenge Robotics Team, Strathcona-Tweedsmuir School",
    location: "Okotoks, Alberta",
    location_type: "Onsite",
    company_link: "https://www.firstroboticscanada.org/",
    company_logo: "/extracurricular_logos/ftc.jpg",
    company_logo_alt: "First Tech Challenge Logo",
    start_date: new Date(2022, 8),
    end_date: new Date(2025, 4),
    technologies: [],
  },
];

export const Projects: Project[] = [
  {
    key: 0,
    thumbnail: "/terrahacks2025.png",
    thumbnail_alt: "TerraHacks 2025",
    name: "PainAR",
    description:
      "React Native app to mark pain locations and auto-generate pre-visit summaries, with a LangChain/OpenAI overlay chatbot for context-aware medical responses. Developed at TerraHacks 2025 with Achita Anantachina, Emilee Chen, and Raymond Chen.",
    links: [
      {
        name: "Devpost",
        destination: "https://devpost.com/software/painar",
        icon: FaDev,
      },
    ],
  },
  {
    key: 1,
    thumbnail: "/geesehacks2025.png",
    thumbnail_alt: "GeeseHacks 2025",
    name: "GeeseTalk",
    description:
      "A web app dedicated to offering gamified isolated training of public speaking and social skills at the user's convenience. Developed at GeeseHacks 2025 with Evan He, Rijul Chaddha, and Lawrence Zou.",
    links: [
      {
        name: "Website",
        destination: "https://geese-hacks-project.vercel.app/",
        icon: FaGlobe,
      },
      {
        name: "Devpost",
        destination: "https://devpost.com/software/geesetalk",
        icon: FaDev,
      },
      {
        name: "Repository",
        destination: "https://github.com/RijulChaddha9504/GeeseHacks",
        icon: FaGithub,
      },
    ],
  },
  {
    key: 2,
    thumbnail: "/ece198.png",
    thumbnail_alt: "ECE 198",
    name: "Home Power Monitoring Device",
    description:
      "Configured and programmed two STM32F401RE boards in C to measure the power usage of an external device using a current transformer that is transmitted to a display board via UART. Developed with Matias Rivas and Gurvir Randhawa for ECE 198: Project Studio.",
    links: [],
  },
  {
    key: 3,
    thumbnail: "/portfolio.png",
    thumbnail_alt: "Portfolio",
    name: "This portfolio!",
    description: "Built with NextJS, React, and Tailwind.",
    links: [
      {
        name: "Repository",
        destination: "https://github.com/chene0/portfolio",
        icon: FaGithub,
      },
    ],
  },
  {
    key: 4,
    thumbnail: "/vance.png",
    thumbnail_alt: "Vance",
    name: "Vance",
    description:
      "Work through problem sets with this assistant that will narrow your focus to your areas of weakness.",
    links: [
      {
        name: "Website",
        destination: "https://vance-phi.vercel.app/",
        icon: FaGlobe,
      },
      {
        name: "Repository",
        destination: "https://github.com/chene0/vance",
        icon: FaGithub,
      },
    ],
  },
  {
    key: 5,
    thumbnail: "/focar.png",
    thumbnail_alt: "Focar",
    name: "Focar",
    description: "Interact with Todoist right from your desktop.",
    links: [
      {
        name: "Repository",
        destination: "https://github.com/chene0/focarapp",
        icon: FaGithub,
      },
    ],
  },
  {
    key: 6,
    thumbnail: "/pilon.jpg",
    thumbnail_alt: "Pilon",
    name: "Pilon",
    description:
      "Produce mathematical notation in real-time. Developed at Hack the North 2022 with Salman Youssef and Pravin Lohani.",
    links: [
      {
        name: "Devpost",
        destination: "https://devpost.com/software/lon",
        icon: FaDev,
      },
      {
        name: "Repository",
        destination: "https://github.com/chene0/HackTheNorth",
        icon: FaGithub,
      },
    ],
  },
  {
    key: 7,
    thumbnail: "/fps.PNG",
    thumbnail_alt: "First Person Shooter",
    name: "Untitled First Person Shooter",
    description:
      "Rely on your audio and attentiveness to thrive in this eerie shooter.",
    links: [
      {
        name: "Repository",
        destination: "https://github.com/chene0/personal-project",
        icon: FaGithub,
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

export const Socials: IconLink[] = [
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
