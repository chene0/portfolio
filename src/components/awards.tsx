import { Awards } from "@/content/portfolio";

export function AwardsComponent() {
    return (
        <ul className="flex flex-col gap-6 list-none p-0 m-0">
            {Awards.map((award, index) => (
                <li key={index} className="flex flex-col gap-1">
                    <span className="text-text-secondary text-xs font-mono">{award.date}</span>
                    <span className="font-display font-semibold text-text-primary text-sm">{award.award_name}</span>
                    <span className="text-text-secondary text-sm leading-relaxed">{award.description}</span>
                </li>
            ))}
        </ul>
    );
}
