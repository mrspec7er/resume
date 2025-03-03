import Navbar from '@/components/ui/navbar';

import { Introduction } from '@/components/section/introduction';
import { Projects } from '@/components/section/project';
import { Blog } from '@/components/section/blog';
import { Footer } from '@/components/ui/footer';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-6 md:pt-12 pt-6 max-w-screen-lg mx-auto">
      <Navbar />
      <Introduction />
      <Blog />
      <Projects />
      <Footer />
    </main>
  );
}
