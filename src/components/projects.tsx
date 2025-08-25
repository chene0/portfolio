import { Projects } from "@/content/portfolio";
import { container } from "@/utils/constants";
import { motion } from "framer-motion";
import Image from 'next/image';

const projectsItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const projects_element_array: React.JSX.Element[] = [];
let key = 0;
for (const project of Projects) {
    const link_elements: React.JSX.Element[] = [];
    for (const link of project.links) {
        link_elements.push(
            <a
                target="_blank"
                href={link.destination}
                rel="noopener noreferrer"
                className="btn btn-primary mx-1"
            >{link.label}</a>
        );
    }

    projects_element_array.push(
        <motion.li className="card bg-base-100 w-80 md:88 xl:w-96 shadow-xl item"
            key={key}
            variants={projectsItem}
        >
            <figure>
                <Image
                    src={project.thumbnail}
                    width={500}
                    height={500}
                    alt={project.thumbnail_alt} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{project.name}</h2>
                <p><small>{project.description}</small></p>
                <div className="card-actions justify-end">
                    {...link_elements}
                </div>
            </div>
        </motion.li>
    );

    ++key;
}

interface ProjectsComponentProps {
    projectsInView: boolean;
}

export function ProjectsComponent({ projectsInView }: ProjectsComponentProps) {
    return (
        <motion.ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 not-prose container list-none'
            variants={container}
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
        >
            {...projects_element_array}
        </motion.ul>
    );
}
