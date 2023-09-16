import Hero from '@/Components/sections/Hero';
import Contact from '@/Components/sections/Contact';
import Jobs from '@/Components/sections/Jobs';
import Projects from '@/Components/sections/Projects';
import About from '@/Components/sections/About';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <div className="grid gap-20">
        <About />
        <Jobs />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
