'use client'

import Image from "next/image"
import Link from "next/link"
import { SkillsComponent } from "../skills";

interface ExperienceProps {
    experience: Experience;
    className?: string;
}

export default function Experience({ experience, className }: ExperienceProps) {
    const formatDate = (date: Date | "Present" | "Incoming") => {
        if (date === "Present") return "Present"
        if (date === "Incoming") return "Incoming"
        return new Intl.DateTimeFormat("en-US", {
            month: "short",
            year: "numeric",
        }).format(date)
    }

    const getLocationTypeIcon = (locationType: string) => {
        switch (locationType.toLowerCase()) {
            case "remote":  return "🏠"
            case "hybrid":  return "🔄"
            case "onsite":  return "🏢"
            default:        return "📍"
        }
    }

    return (
        <div className={`flex flex-col gap-1 ${className ?? ''}`}>
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 mb-4">
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
                    >
                        {experience.company}
                    </Link>
                    <div className="flex flex-wrap items-center gap-3 mt-1">
                        <span className="text-text-secondary text-xs">
                            {getLocationTypeIcon(experience.location_type)} {experience.location}
                        </span>
                        <span className="text-text-muted text-xs">{experience.location_type}</span>
                        <span className="text-text-secondary text-xs">
                            {formatDate(experience.start_date)} – {formatDate(experience.end_date)}
                        </span>
                    </div>
                </div>
            </div>

            {experience.description && (
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{experience.description}</p>
            )}

            {experience.technologies.length > 0 && (
                <SkillsComponent skills={experience.technologies} />
            )}
        </div>
    );
}
