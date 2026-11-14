'use client'

import { useState } from 'react';
import { Projects } from "@/content/portfolio";
import Image from 'next/image';
import { motion } from 'framer-motion';
import ReactMarkdown, { type Components } from 'react-markdown';

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } }
}

const item = {
    hidden: { opacity: 0, y: 10 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } }
}

const markdownComponents: Components = {
    a: ({ href, title, children }) => (
        <a
            href={href}
            title={title}
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal text-inherit underline decoration-text-muted underline-offset-2 transition-colors hover:text-text-primary hover:decoration-text-secondary"
        >
            {children}
        </a>
    ),
}

export function ProjectsComponent() {
    const [loaded, setLoaded] = useState<boolean[]>(Projects.map(() => false))

    const markLoaded = (index: number) => {
        setLoaded(prev => {
            const next = [...prev]
            next[index] = true
            return next
        })
    }

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
                    className="bg-bg-raised flashlight-card rounded-xl hover:shadow-md hover:shadow-black/30"
                >
                    <div className={`w-full aspect-[16/9] relative overflow-hidden rounded-t-xl ${!loaded[index] ? 'img-shimmer' : ''}`}>
                        {/\.(mp4|webm|ogv)(?:[?#]|$)/i.test(project.thumbnail) ? (
                            <video
                                src={project.thumbnail}
                                aria-label={project.thumbnail_alt}
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                onLoadedData={() => markLoaded(index)}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${loaded[index] ? 'opacity-100' : 'opacity-0'}`}
                            />
                        ) : (
                            <Image
                                src={project.thumbnail}
                                alt={project.thumbnail_alt}
                                fill
                                onLoad={() => markLoaded(index)}
                                className={`object-cover transition-opacity duration-500 ${loaded[index] ? 'opacity-100' : 'opacity-0'}`}
                            />
                        )}
                    </div>
                    <div className="p-4">
                        <h3 className="font-display font-semibold text-text-primary text-base" style={{ margin: '0 0 4px 0' }}>
                            {project.name}
                        </h3>
                        <div className="prose prose-sm max-w-none text-text-secondary leading-relaxed prose-p:my-3 prose-p:whitespace-pre-line [&>:first-child]:mt-0 [&>:last-child]:mb-0" style={{ margin: '0 0 12px 0' }}>
                            <ReactMarkdown skipHtml components={markdownComponents}>
                                {project.description}
                            </ReactMarkdown>
                        </div>
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
