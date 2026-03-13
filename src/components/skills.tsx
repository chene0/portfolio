import {
    SKILL_NEXTJS, SKILL_REACT, SKILL_ANGULARJS, SKILL_TAILWIND,
    SKILL_DOTNET, SKILL_EXPRESS, SKILL_FASTAPI, SKILL_SYMFONY, SKILL_PHP,
    SKILL_TYPESCRIPT, SKILL_PYTHON, SKILL_CSHARP, SKILL_CPP, SKILL_JAVA,
    SKILL_POSTGRES, SKILL_SQLSERVER, SKILL_MONGODB, SKILL_SQLALCHEMY, SKILL_PRISMA, SKILL_GRAPHQL,
    SKILL_DOCKER, SKILL_AWS, SKILL_PYTEST, SKILL_UNITY,
    Skills,
} from "@/content/portfolio";

const SKILL_GROUPS: { label: string; skills: Skill[] }[] = [
    { label: 'Frontend',      skills: [SKILL_NEXTJS, SKILL_REACT, SKILL_ANGULARJS, SKILL_TAILWIND] },
    { label: 'Backend',       skills: [SKILL_DOTNET, SKILL_EXPRESS, SKILL_FASTAPI, SKILL_SYMFONY, SKILL_PHP] },
    { label: 'Languages',     skills: [SKILL_TYPESCRIPT, SKILL_PYTHON, SKILL_CSHARP, SKILL_CPP, SKILL_JAVA] },
    { label: 'Data',          skills: [SKILL_POSTGRES, SKILL_SQLSERVER, SKILL_MONGODB, SKILL_SQLALCHEMY, SKILL_PRISMA, SKILL_GRAPHQL] },
    { label: 'Infra & Tools', skills: [SKILL_DOCKER, SKILL_AWS, SKILL_PYTEST, SKILL_UNITY] },
]

function SkillPill({ skill }: { skill: Skill }) {
    return (
        <a
            href={skill.destination}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-bg-raised text-sm text-text-secondary no-underline hover:text-text-primary hover:border-accent/40 transition-colors duration-150"
        >
            <skill.icon className="w-4 h-4 flex-shrink-0" />
            <span className="font-medium">{skill.name}</span>
        </a>
    )
}

export function SkillsComponent({ skills, categorized }: { skills?: Skill[]; categorized?: boolean }) {
    if (categorized) {
        return (
            <div className="flex flex-col gap-5">
                {SKILL_GROUPS.map((group) => (
                    <div key={group.label}>
                        <p className="text-text-muted text-xs uppercase tracking-widest mb-2">{group.label}</p>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <SkillPill key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    const skillsToRender = skills && skills.length > 0 ? skills : Skills;

    return (
        <div className="flex flex-wrap gap-2">
            {skillsToRender.map((skill) => (
                <SkillPill key={skill.name} skill={skill} />
            ))}
        </div>
    );
}
