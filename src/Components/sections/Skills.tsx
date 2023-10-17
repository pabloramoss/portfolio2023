'use client';
import { Element } from 'react-scroll';

import SectionTitle from '../SectionTitle';
import Reveal from '../Reveal';

export default function Skills() {
  return (
    <section>
      <Element className="grid gap-10" name="skills">
        <SectionTitle title="Technical skills" />
        <Reveal>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold text-xl">Languages</p>
                  <p className="text-slate-400">Typescript, Javascript ES5+, HTML, CSS</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold text-xl">Testing</p>
                  <p className="text-slate-400">Jest, Testing library</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold text-xl">Ajax</p>
                  <p className="text-slate-400">
                    Axios, SWR, React Query, Redux Toolkit Query, Websockets
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold text-xl">Styling</p>
                  <p className="text-slate-400">
                    TailwindCSS, Material UI, Styled-components, Chakra-UI, Bootstrap, Ant Design,
                    Shadcn/ui
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold text-xl">Backend</p>
                  <p className="text-slate-400">Node.js, Express.js, MongoDB</p>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold text-xl">Frameworks</p>
                  <p className="text-slate-400">React.js, Next.js</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold text-xl">State management</p>
                  <p className="text-slate-400">Redux Saga, Redux Toolkit, Zustand</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold text-xl">Tooling</p>
                  <p className="text-slate-400">
                    Docker, Webpack, Babel, NPM, Yarn, PNPM, Bun, Jira, Git, Github
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold text-xl">Design</p>
                  <p className="text-slate-400">Figma, Adobe Photoshop, Adobe Illustrator</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold text-xl">Spoken languages</p>
                  <div className="text-slate-400">
                    <p>English (conversational)</p>
                    <p>Spanish (native)</p>
                    <p>Italian (intermediate)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Element>
    </section>
  );
}
