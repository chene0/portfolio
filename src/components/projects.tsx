import { Projects } from "@/content/portfolio";
import Image from 'next/image';

export function ProjectsComponent() {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0">
            {Projects.map((project, index) => (
                <li key={index} className="bg-bg-raised border border-border rounded-xl overflow-hidden">
                    <div className="w-full aspect-[16/9] relative">
                        <Image
                            src={project.thumbnail}
                            alt={project.thumbnail_alt}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="font-display font-semibold text-text-primary text-base" style={{ margin: '0 0 4px 0' }}>
                            {project.name}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed" style={{ margin: '0 0 12px 0' }}>
                            {project.description}
                        </p>
                        {project.links.length > 0 && (
                            <div className="flex gap-3">
                                {project.links.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.destination}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={link.name}
                                        className="text-text-secondary hover:text-text-primary transition-colors no-underline"
                                    >
                                        <link.icon size={18} />
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}
