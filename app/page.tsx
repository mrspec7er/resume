import Navbar from "@/components/ui/navbar";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import projects from "@/app/data/projects.json";
import blog from "@/app/data/blog.json";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-6 pt-12 max-w-screen-lg mx-auto">
      <Navbar />
      <Introduction />
      <Projects />
      <Blog />
      <Footer />
    </main>
  );
}

export function Introduction() {
  return (
    <div className="mt-10 mb-7 text-gray-200">
      <p>
        Hi there, I'm{" "}
        <span className="font-semibold text-teal-600">
          <Link
            className="hover:underline underline-offset-4"
            href="https://linktr.ee/kusumasandi"
          >
            Sandi
          </Link>
        </span>
        . I'm a dedicated software developer, working as a{" "}
        <span className="font-semibold text-teal-600">
          <a
            target="_blank"
            className="hover:underline underline-offset-4"
            href="https://www.linkedin.com/in/kusuma-sandi-9646a1208/"
          >
            backend engineer
          </a>
        </span>{" "}
        for a living. I enjoy solving problems and building new things. My main
        focus is on creating robust scalable, and idiomatic software to improve
        our daily lives. Outside of writing code, I maintain a dynamic
        lifestyle, engaging in weightlifting to stay active, reading books, and
        playing casual{" "}
        <span className="font-semibold text-teal-600">
          <a
            href="https://steamcommunity.com/profiles/76561198861495468/"
            className="hover:underline underline-offset-4"
            target="_blank"
          >
            games
          </a>
        </span>{" "}
        for relaxation.
      </p>
      <div className="my-5">
        <p className="font-semibold">Education: </p>
        <ul className="list-disc ml-7">
          <li>
            Bachelor of Computer Science -{" "}
            <a
              className="font-semibold text-teal-600 hover:underline underline-offset-4"
              target="_blank"
              href="https://if.unud.ac.id/"
            >
              {" "}
              Udayana University
            </a>
          </li>
          <li>
            Fullstack Web Bootcamp -{" "}
            <a
              className="font-semibold text-teal-600 hover:underline underline-offset-4"
              target="_blank"
              href="https://www.binaracademy.com/"
            >
              {" "}
              Binar Academy
            </a>
          </li>
        </ul>
      </div>

      <div className="my-5">
        <p className="font-semibold">Experience: </p>
        <ul className="list-disc ml-7">
          <li>
            <span>Nov, 2022 - Aug, 2023</span>,{" "}
            <span>Freelance Fullstack Developer</span> -
            <a
              target="_blank"
              className="font-semibold text-teal-600 hover:underline underline-offset-4"
              href="https://maiharta.com/home"
            >
              {" "}
              CV. Maiharta
            </a>
          </li>
          <li>
            <span>Mei, 2023 - Present</span>, <span>Backend Engineer</span> -
            <a
              target="_blank"
              className="font-semibold text-teal-600 hover:underline underline-offset-4"
              href="https://elkacode.com/"
            >
              {" "}
              CV. Elka Code{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <div className="mb-10 text-gray-200">
      <p className="font-semibold text-xl text-center">Projects</p>
      {projects.map((p) => (
        <div className="pb-3" key={p.name}>
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
      ))}
    </div>
  );
}

export function Blog() {
  return (
    <div className="mb-10 text-gray-300">
      <p className="font-semibold text-xl text-center pb-2">Blog</p>
      {blog.map((b) => (
        <div className="pb-3" key={b.id}>
          <a className="text-lg pt-2 pb-1" target="_blank" href={b.url}>
            <p className="hover:text-teal-500 font-medium hover:underline underline-offset-4 text-gray-100">
              {b.title}
            </p>
            <div className="flex gap-3 text-sm font-semibold pb-1 ml-1 text-teal-600">
              Keyword:
              {b.keyword.map((k, i) => (
                <span className="hover:underline underline-offset-4" key={k}>
                  {k}
                  {i !== b.keyword.length - 1 ? <span>,</span> : null}
                </span>
              ))}
            </div>
            <p className="indent-5 hover:brightness-125">{b.desc}</p>
          </a>
          <hr className="bg-white mb-3 mt-1 mr-12" />
        </div>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="w-full">
      <div className="md:flex md:items-center md:justify-between">
        <span className="text-base text-gray-500 dark:text-gray-300 sm:text-center">
          2024 Kusuma Sandi
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
          <a
            href="https://github.com/mrspec7er"
            target="_blank"
            className="text-gray-400 text-2xl hover:text-gray-100"
          >
            <AiFillGithub />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kusuma-sandi-9646a1208/"
            target="_blank"
            className="text-gray-400 text-2xl hover:text-gray-100"
          >
            <AiFillLinkedin />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:wijayakusumasandi@gmail.com"
            target="_blank"
            className="text-gray-400 text-2xl hover:text-gray-100"
          >
            <AiOutlineMail />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
      <hr className="h-px my-3 bg-gray-500 border-0" />
    </footer>
  );
}
