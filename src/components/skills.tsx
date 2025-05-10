import { Skills } from "@/content/portfolio";

const skills_element_array: React.JSX.Element[] = [];
for (const skill of Skills) {
    skills_element_array.push(
        <a href={skill.destination} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-base-100 shadow-xl no-underline">
            <h2 className='text-center'>{skill.name}</h2>
            <skill.icon className='mx-auto my-4' size={'6rem'} />
        </a>
    );
}

export function SkillsComponent() {
    return (
        <div className='mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {...skills_element_array}
        </div>
    );
}
