import { Skills } from "@/content/portfolio";

export function SkillsComponent({ skills }: { skills?: Skill[] }) {
    const skillsToRender = skills && skills.length > 0 ? skills : Skills;

    return (
        <div className="flex flex-wrap gap-2">
            {skillsToRender.map((skill) => (
                <a
                    key={skill.name}
                    href={skill.destination}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-bg-raised text-sm text-text-secondary no-underline hover:text-text-primary hover:border-accent/40 transition-colors duration-150"
                >
                    <skill.icon className="w-4 h-4 flex-shrink-0" />
                    <span className="font-medium">{skill.name}</span>
                </a>
            ))}
        </div>
    );
}
