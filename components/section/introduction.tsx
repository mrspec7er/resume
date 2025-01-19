'use client';
import { Variants, motion } from 'framer-motion';
import Link from 'next/link';

export function Introduction() {
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
      },
    },
  };
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="splash" />
      <motion.div className="card" variants={cardVariants}>
        <div className="mt-10 mb-7 text-gray-200">
          {/* <p className="text-justify">
            Hi there, I&apos;m{' '}
            <span className="font-semibold text-teal-600">
              <Link
                className="hover:underline underline-offset-4"
                href="https://linktr.ee/kusumasandi"
              >
                Sandi
              </Link>
            </span>
            . I&apos;m a dedicated software developer, working as a{' '}
            <span className="font-semibold text-teal-600">
              <Link
                target="_blank"
                className="hover:underline underline-offset-4"
                href="https://www.linkedin.com/in/kusuma-sandi-9646a1208/"
              >
                backend engineer
              </Link>
            </span>{' '}
            for a living. I enjoy solving problems and building new things. My
            main focus is on creating robust scalable, and idiomatic software to
            improve our daily lives. Outside of writing code, I maintain a
            dynamic lifestyle, engaging in weightlifting to stay active, reading
            books, and playing casual{' '}
            <span className="font-semibold text-teal-600">
              <Link
                href="https://steamcommunity.com/profiles/76561198861495468/"
                className="hover:underline underline-offset-4"
                target="_blank"
              >
                games
              </Link>
            </span>{' '}
            for relaxation.
          </p> */}
          <p>Hi there! 👋 Welcome to my little corner of the internet.</p>
          <p className="pt-2 text-justify indent-5">
            I&apos;m{' '}
            <span className="font-semibold text-teal-600">
              <Link
                className="hover:underline underline-offset-4"
                href="https://linktr.ee/kusumasandi"
              >
                Sandi
              </Link>
            </span>
            , a software engineer with a passion for crafting clean, efficient,
            and scalable code. Over the past few years, I&apos;ve had the chance
            to work on some exciting projects from building collaborative apps
            for the AEC industry to simplifying complex licensing processes. I
            thrive on solving challenging problems and turning ideas into
            reality through technology.{' '}
          </p>{' '}
          <p className="pt-2 text-justify indent-5">
            When I&apos;m not coding, you&apos;ll probably find me exploring new
            tools, reading books, or learning something new to sharpen my
            skills. I believe in staying curious and embracing continuous
            growth.{' '}
          </p>
          <p className="pt-2 text-justify indent-5">
            Feel free to explore my site to learn more about my work, the
            projects I&apos;ve been part of, and what I&apos;m up to next. And
            if you think we&apos;d make a great team or just want to say hi,
            don&apos;t hesitate to reach out!. Let&apos;s build something
            awesome together. 🚀
          </p>
          {/* <div className="my-5">
            <p className="font-semibold">Education: </p>
            <ul className="list-disc ml-7">
              <li>
                Bachelor of Computer Science -{" "}
                <Link
                  className="font-semibold text-teal-600 hover:underline underline-offset-4"
                  target="_blank"
                  href="https://if.unud.ac.id/"
                >
                  {" "}
                  Udayana University
                </Link>
              </li>
              <li>
                Fullstack Web Bootcamp -{" "}
                <Link
                  className="font-semibold text-teal-600 hover:underline underline-offset-4"
                  target="_blank"
                  href="https://www.binaracademy.com/"
                >
                  {" "}
                  Binar Academy
                </Link>
              </li>
            </ul>
          </div>

          <div className="my-5">
            <p className="font-semibold">Experience: </p>
            <ul className="list-disc ml-7">
              <li>
                <span>Nov, 2022 - Aug, 2023</span>,{" "}
                <span>Freelance Fullstack Developer</span> -
                <Link
                  target="_blank"
                  className="font-semibold text-teal-600 hover:underline underline-offset-4"
                  href="https://maiharta.com/home"
                >
                  {" "}
                  CV. Maiharta
                </Link>
              </li>
              <li>
                <span>Mei, 2023 - Present</span>, <span>Backend Engineer</span>{" "}
                -
                <Link
                  target="_blank"
                  className="font-semibold text-teal-600 hover:underline underline-offset-4"
                  href="https://elkacode.com/"
                >
                  {" "}
                  CV. Elka Code{" "}
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </motion.div>
    </motion.div>
  );
}
