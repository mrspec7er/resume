"use client";
import blog from "@/app/data/blog.json";
import { Variants, motion } from "framer-motion";

export function Blog() {
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
    <div className="mb-10 text-gray-300">
      {blog.map((b, i) => (
        <motion.div
          key={b.id}
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="splash" />
          <motion.div className="card" variants={cardVariants}>
            {i === 0 ? (
              <p className="font-semibold text-xl text-center pb-2">Blog</p>
            ) : null}
            <div className="pb-3">
              <a className="text-lg pt-2 pb-1" target="_blank" href={b.url}>
                <p className="hover:text-teal-500 font-medium hover:underline underline-offset-4 text-gray-100">
                  {b.title}
                </p>
                <div className="flex flex-wrap gap-3 text-sm font-semibold pb-1 ml-1 text-teal-600">
                  Keyword:
                  {b.keyword.map((k, i) => (
                    <span
                      className="hover:underline underline-offset-4"
                      key={k}
                    >
                      {k}
                      {i !== b.keyword.length - 1 ? <span>,</span> : null}
                    </span>
                  ))}
                </div>
                <p className="indent-5 hover:brightness-125">{b.desc}</p>
              </a>
              <hr className="bg-white mb-3 mt-1 mr-12" />
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
