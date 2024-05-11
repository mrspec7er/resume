"use client";
import { FiExternalLink } from "react-icons/fi";
import projects from "@/app/data/projects.json";
import { Variants, motion } from "framer-motion";

export function Projects() {
  const cardVariants: Variants = {
    offscreen: {
      x: -300,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.7,
        duration: 3,
        delay: 0.5,
      },
    },
  };
  return (
    <div className="mb-10 text-gray-200">
      {projects.map((p, i) => (
        <motion.div
          key={p.name}
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="splash" />
          <motion.div className="card" variants={cardVariants}>
            {i === 0 ? (
              <p className="font-semibold text-xl text-center">Projects</p>
            ) : null}
            <div className="pb-3">
              <a
                className="font-medium text-lg pt-2 pb-1 flex gap-2 items-center hover:text-teal-500"
                target="_blank"
                href={p.url}
              >
                <span>{p.name}</span>
                <div className="text-teal-600">
                  <FiExternalLink />
                </div>
              </a>
              <p className="indent-5">{p.desc}</p>
              <div className="flex flex-wrap gap-3 text-teal-600 mt-3 text-sm font-semibold">
                {p.techStack.map((t) => (
                  <a
                    key={t.name}
                    className="hover:underline underline-offset-4"
                    href={t.url}
                  >
                    {t.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
