import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="py-4 px-10 flex w-full items-center justify-between max-w-5xl fixed top-0 backdrop-blur-xl">
      <Image alt="pablo ramos" height={40} src="/logo.svg" width={40} />
      <div className="flex gap-4 uppercase text-slate-300 font-bold tracking-wide text-xs items-center">
        <Link className="hover:text-slate-100 hover:scale-105 transition-all" href="#about">
          About
        </Link>
        <Link className="hover:text-slate-100 hover:scale-105 transition-all" href="#jobs">
          Experience
        </Link>
        <Link className="hover:text-slate-100 hover:scale-105 transition-all" href="#projects">
          Projects
        </Link>
        <Link className="hover:text-slate-100 hover:scale-105 transition-all" href="#contact">
          Contact
        </Link>
        <button className="rounded-md border-green-300 border-solid border-2 px-6 py-1 text-green-300 hover:bg-green-300 hover:text-black">
          My resume
        </button>
      </div>
    </nav>
  );
}
