import { Skills } from "@/content/portfolio";

const skills_element_array: React.JSX.Element[] = [];
for (const skill of Skills) {
    skills_element_array.push(
        <a
            href={skill.destination}
            target="_blank"
            rel="noopener noreferrer"
            className="badge badge-lg badge-outline flex flex-row items-center gap-2 px-4 py-3 no-underline"
        >
            <skill.icon className="mx-auto" />
            <span className="text-center text-base font-medium">{skill.name}</span>
        </a>
    );
}

export function SkillsComponent() {
    return (
        <div className="mx-auto flex flex-wrap gap-3 justify-center items-center">
            {...skills_element_array}
        </div>
    );
}
