import { Skills } from "@/content/portfolio";

export function SkillsComponent({ skills }: { skills?: Skill[] }) {
    const skillsToRender = skills && skills.length > 0 ? skills : Skills;

    return (
        <div className="mx-auto flex flex-wrap gap-3 justify-center items-center">
            {skillsToRender.map((skill) => (
                <a
                    key={skill.name}
                    href={skill.destination}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="badge badge-lg badge-outline flex flex-row items-center gap-2 px-4 py-3 no-underline"
                >
                    <skill.icon className="mx-auto" />
                    <span className="text-center text-base font-medium">{skill.name}</span>
                </a>
            ))}
        </div>
    );
}
