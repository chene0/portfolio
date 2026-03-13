'use client'

import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from 'framer-motion'
import { SkillsComponent } from "../skills";

interface ExperienceProps {
    experience: Experience;
    className?: string;
}

export default function Experience({ experience, className }: ExperienceProps) {
    const [isOpen, setIsOpen] = useState(false)

    const formatDate = (date: Date | "Present" | "Incoming") => {
        if (date === "Present") return "Present"
        if (date === "Incoming") return "Incoming"
        return new Intl.DateTimeFormat("en-US", {
            month: "short",
            year: "numeric",
        }).format(date)
    }

    return (
        <div
            className={`flex flex-col border border-border/60 rounded-xl p-5 cursor-pointer hover:border-border transition-colors ${className ?? ''}`}
            onClick={() => setIsOpen(o => !o)}
        >
            <div className="flex items-start gap-4 group">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-bg-elevated border border-border">
                    <Image
                        src={experience.company_logo || "/placeholder.svg"}
                        alt={experience.company_logo_alt}
                        width={64}
                        height={64}
                        className="object-contain w-full h-full"
                        style={{ margin: 0 }}
                    />
                </div>

                <div className="flex-1">
                    <h3 className="font-display text-base font-semibold text-text-primary" style={{ margin: 0 }}>
                        {experience.role}
                    </h3>
                    <Link
                        href={experience.company_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent text-sm font-medium hover:opacity-70 transition-opacity no-underline"
                        onClick={e => e.stopPropagation()}
                    >
                        {experience.company}
                    </Link>
                    <div className="flex flex-wrap items-center gap-3 mt-1">
                        <span className="text-text-secondary text-xs">
                            {experience.location} · {experience.location_type}
                        </span>
                        <span className="text-text-secondary text-xs">
                            {formatDate(experience.start_date)} – {formatDate(experience.end_date)}
                        </span>
                    </div>
                </div>

                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-text-muted group-hover:text-text-secondary flex-shrink-0 mt-1"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </motion.div>
            </div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="pt-3 pl-20">
                            {experience.description && (
                                <p className="text-text-secondary text-sm leading-relaxed mb-4">{experience.description}</p>
                            )}
                            {experience.technologies.length > 0 && (
                                <SkillsComponent skills={experience.technologies} />
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
