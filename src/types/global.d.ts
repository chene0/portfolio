import type { IconType } from "react-icons";

declare global {
	/* Interfaces */
	// Essentials
	interface Hyperlink {
		label: string;
		destination: string;
	}

	// Global
	interface Section {
		title: string;
		destination: string;
	}

	interface Experience {
		role: string;
		company: string;
		location: string;
		location_type: string; // onsite, remote, hybrid
		company_link: string;
		company_logo: string;
		company_logo_alt: string;
		start_date: Date;
		end_date: Date | "Present";
		description: string;
		technologies: Skill[];
	}

	// Sections
	interface Skill {
		destination: string;
		name: string;
		icon: IconType;
	}

	interface Project {
		key: number;
		thumbnail: string;
		thumbnail_alt: string;
		name: string;
		description: string;
		links: Hyperlink[];
	}

	interface Award {
		key: number;
		date: string;
		award_name: string;
		description: string;
	}

	interface Social {
		name?: string;
		destination: string;
		icon: IconType;
	}
}
