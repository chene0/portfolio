'use client'

import { useState } from 'react';
import { Projects } from "@/content/portfolio";
import Image from 'next/image';
import { motion } from 'framer-motion';

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } }
}

const item = {
    hidden: { opacity: 0, y: 10 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } }
}

export function ProjectsComponent() {
    const [loaded, setLoaded] = useState<boolean[]>(Projects.map(() => false))

    return (
        <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0"
        >
            {Projects.map((project, index) => (
                <motion.li
                    key={index}
                    variants={item}
                    whileHover={{ y: -2, transition: { duration: 0.15 } }}
                    className="bg-bg-raised border border-border rounded-xl overflow-hidden hover:shadow-md hover:shadow-black/30"
                >
                    <div className={`w-full aspect-[16/9] relative ${!loaded[index] ? 'img-shimmer' : ''}`}>
                        <Image
                            src={project.thumbnail}
                            alt={project.thumbnail_alt}
                            fill
                            onLoad={() => setLoaded(prev => {
                                const next = [...prev]
                                next[index] = true
                                return next
                            })}
                            className={`object-cover transition-opacity duration-500 ${loaded[index] ? 'opacity-100' : 'opacity-0'}`}
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
                </motion.li>
            ))}
        </motion.ul>
    );
}
