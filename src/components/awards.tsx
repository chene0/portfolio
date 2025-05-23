import { motion } from "framer-motion";
import { container, timelineItem } from "@/utils/constants";
import { Awards } from "@/content/portfolio";

interface AwardsComponentProp {
    awardsInView: boolean;
}

export function AwardsComponent({ awardsInView }: AwardsComponentProp) {
    return (
        <motion.ul
            className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical container list-none"
            variants={container}
            initial="hidden"
            animate={awardsInView ? "visible" : "hidden"}
        >
            {Awards.map((award, index) => (
                <motion.li
                    key={award.key}
                    className="item"
                    variants={timelineItem}
                >
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <title>Award</title>
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className={`${(index % 2 === 0) ? "timeline-start md:text-end" : "timeline-end"} mb-10`}>
                        <time className="font-mono italic">{award.date}</time>
                        <div className="text-lg font-black">{award.award_name}</div>
                        {award.description}
                    </div>
                    <hr />
                </motion.li>
            ))}
        </motion.ul>
    );

}
