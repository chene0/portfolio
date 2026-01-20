import Experience from "./experience";

interface ExperienceCollectionProps {
    experiences: Experience[];
}

export default function ExperienceCollection({ experiences }: ExperienceCollectionProps) {
    return (
        <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
                <Experience key={index} experience={exp} />
            ))}
        </div>
    );
}
