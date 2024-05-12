"use client";
import blog from "@/app/data/blog.json";
import { Variants, motion } from "framer-motion";
import Link from "next/link";

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
    <div id="blog" className="mb-10 text-gray-300">
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
              <p className="font-semibold text-xl text-center pb-3">Blog</p>
            ) : null}
            <div className="pb-3">
              <Link className="pt-2 pb-1" href={b.url}>
                <div className="flex justify-between">
                  <span className="hover:text-teal-500 font-medium hover:underline underline-offset-4 text-gray-100">
                    {b.title}
                  </span>
                  <span className="text-sm">{b.publishAt}</span>
                </div>
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
                <p className="indent-5 hover:brightness-125 text-justify">
                  {b.desc}
                </p>
              </Link>
              <hr className="h-px my-2 bg-gray-300 border-0" />
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
