'use client';
import { FiExternalLink } from 'react-icons/fi';
import projects from '@/app/data/projects.json';
import { Variants, motion } from 'framer-motion';
import Link from 'next/link';

export function Projects() {
  const cardVariants: Variants = {
    offscreen: {
      x: -200,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 3,
        delay: 0.5,
      },
    },
  };
  return (
    <div id="project" className="mb-10 text-gray-300">
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
              <Link
                className="font-medium text-lg pt-2 pb-1 flex gap-2 items-center hover:text-teal-500 hover:underline underline-offset-4 text-gray-100"
                target="_blank"
                href={p.url}
              >
                <span>{p.name}</span>
                <div className="text-teal-600">
                  <FiExternalLink />
                </div>
              </Link>
              <Link href={p.url} target="_blank">
                <p className="indent-5 text-justify hover:text-gray-100">
                  {p.desc}
                </p>
              </Link>
              <div className="flex flex-wrap gap-3 text-teal-600 mt-3 text-sm font-semibold">
                {p.techStack.map((t) => (
                  <Link
                    key={t.name}
                    className="hover:underline underline-offset-4"
                    href={t.url}
                  >
                    {t.name}
                  </Link>
                ))}
              </div>
              <hr className="h-px my-2 bg-gray-300 border-0" />
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
