import Navbar from "@/components/ui/navbar";
import { FiExternalLink } from "react-icons/fi";
import projects from "@/app/data/projects.json";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-6 py-12 max-w-screen-lg mx-auto">
      <Navbar />
      <Introduction />
      <Projects />
    </main>
  );
}

export function Introduction() {
  return (
    <div className="mt-10 mb-7 text-gray-200">
      <p>
        Hi there, I'm <span className="font-semibold">Sandi</span>. I'm a
        software developer, currently working as a{" "}
        <span className="font-semibold">backend engineer</span> to earn a
        living. I enjoy solving problems and building new things. My main focus
        is on creating <span className="font-semibold">robust</span>,{" "}
        <span className="font-semibold">scalable</span>, and{" "}
        <span className="font-semibold">idiomatic</span> software to improve our
        daily lives. Outside of writing code, I'm usually weight lifting,
        reading books, or playing casual games.
      </p>
      <div className="my-5">
        <p className="font-semibold">Education: </p>
        <ul className="list-disc ml-7">
          <li>
            Bachelor of Computer Science -{" "}
            <a
              className="font-semibold"
              target="_blank"
              href="https://if.unud.ac.id/"
            >
              {" "}
              Udayana University
            </a>
          </li>
          <li>
            Fullstack Web Bootcamp-{" "}
            <a
              className="font-semibold"
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
            <span className="font-semibold">Freelance Fullstack Developer</span>{" "}
            -{" "}
            <a target="_blank" href="https://maiharta.com/home">
              {" "}
              CV. Maiharta
            </a>
          </li>
          <li>
            <span>Mei, 2023 - Present</span>,{" "}
            <span className="font-semibold">Backend Engineer</span> -{" "}
            <a target="_blank" href="https://elkacode.com/">
              {" "}
              CV. Elka Code
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
