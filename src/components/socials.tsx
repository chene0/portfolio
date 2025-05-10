import { Socials } from "@/content/portfolio";

export function SocialsComponent() {
    return (
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            {Socials.map((social) => (
                <a key={social.name} href={social.destination} target="_blank" rel="noopener noreferrer">
                    <social.icon size={'1.5rem'} />
                </a>
            ))}
        </nav>
    );
}
