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
            case "remote":
                return "🏠"
            case "hybrid":
                return "🔄"
            case "onsite":
                return "🏢"
            default:
                return "📍"
        }
    }

    const getLocationTypeBadgeColor = (locationType: string) => {
        switch (locationType.toLowerCase()) {
            case "remote":
                return "badge-success"
            case "hybrid":
                return "badge-warning"
            case "onsite":
                return "badge-info"
            default:
                return "badge-neutral"
        }
    }

    return (
        <div className={`rounded-2xl ${className}`}>
            {/* Header with company logo and basic info */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-12 mb-4">
                <div className="avatar">
                    <div className="w-36 h-36 rounded-lg">
                        <Image
                            src={experience.company_logo || "/placeholder.svg"}
                            alt={experience.company_logo_alt}
                            width={144}
                            height={144}
                            className="object-contain"
                            style={{ marginTop: 0, marginBottom: 0 }}
                        />
                    </div>
                </div>

                <div className="flex-1">
                    <h3 className="card-title text-xl font-bold text-base-content" style={{ marginTop: 0, marginBottom: 0 }}>{experience.role}</h3>
                    <Link
                        href={experience.company_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-neutral-content text-lg font-semibold hover:link-hover"
                    >
                        {experience.company}
                    </Link>

                    {/* Location and dates */}
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                        <div className="flex items-center gap-1 text-base-content/70">
                            <span>{getLocationTypeIcon(experience.location_type)}</span>
                            <span className="text-sm">{experience.location}</span>
                        </div>

                        <div className={`badge ${getLocationTypeBadgeColor(experience.location_type)} badge-sm`}>
                            {experience.location_type}
                        </div>

                        <div className="text-sm text-base-content/60">
                            {formatDate(experience.start_date)} - {formatDate(experience.end_date)}
                        </div>
                    </div>
                </div>
            </div>

            {/* Description */}
            {experience.description && (
                <div className="mb-4">
                    <p className="text-base-content/80 leading-relaxed">{experience.description}</p>
                </div>
            )}

            {/* Technologies */}
            {experience.technologies.length > 0 && (
                <SkillsComponent />
            )}
        </div>
    );
}
