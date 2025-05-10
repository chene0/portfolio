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
