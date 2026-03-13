import { useRef } from 'react';
import { Awards } from "@/content/portfolio";
import { motion, useInView } from 'framer-motion';

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } }
}

const item = {
    hidden: { opacity: 0, y: 10 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } }
}

export function AwardsComponent() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.ul
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="flex flex-col gap-6 list-none p-0 m-0"
        >
            {Awards.map((award, index) => (
                <motion.li key={index} variants={item} className="flex flex-col gap-1">
                    <span className="text-text-secondary text-xs font-mono">{award.date}</span>
                    <span className="font-display font-semibold text-text-primary text-sm">{award.award_name}</span>
                    <span className="text-text-secondary text-sm leading-relaxed">{award.description}</span>
                </motion.li>
            ))}
        </motion.ul>
    );
}
