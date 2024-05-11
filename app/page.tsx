import Navbar from "@/components/ui/navbar";
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

import { Introduction } from "@/components/section/introduction";
import { Projects } from "@/components/section/project";
import { Blog } from "@/components/section/blog";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-6 md:pt-12 pt-6 max-w-screen-lg mx-auto">
      <Navbar />
      <Introduction />
      <Projects />
      <Blog />
      <Footer />
    </main>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="w-full">
      <div className="md:flex md:items-center md:justify-between">
        <span className="text-base text-gray-500 dark:text-gray-300 sm:text-center">
          Kusuma Sandi
        </span>
        <div className="flex justify-end mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
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
