'use client';
import { Element } from 'react-scroll';

import { config } from '@/config';

import SectionTitle from '../SectionTitle';
import Reveal from '../Reveal';

export default function Jobs() {
  return (
    <section>
      <Element className="grid gap-10 pt-10" name="jobs">
        <SectionTitle title="Experience" />
        <div className="flex gap-8">
          <Reveal>
            <div className="grid gap-4">
              <div className="flex justify-between">
                <Reveal>
                  <div>
                    <h3 className="font-bold text-xl uppercase">Inceptia AI</h3>
                    <p className="text-gray-500 flex md:hidden text-sm">July 2022 - Present</p>
                    <p className="text-gray-500">Frontend Developer</p>
                  </div>
                </Reveal>
                <Reveal>
                  <p className="text-gray-500 hidden md:flex">July 2022 - Present</p>
                </Reveal>
              </div>
              <div className="grid gap-4">
                <Reveal>
                  <p>
                    In my role as a React Frontend Developer at Inceptia IA, a company providing
                    AI-powered chatbot services, I have been responsible for building an application
                    from the ground up to automate the creation process of new chatbots.
                    Additionally, I have contributed to the development and design of new features
                    for another webchat project.
                  </p>
                </Reveal>
                <Reveal>
                  <p className="font-bold text-lg">Chatbot Builder</p>
                </Reveal>
                <Reveal>
                  <p>
                    Created an app to simplify bot creation process through a visual AI chatbot
                    builder (flowchart). Reduced bot creation process time by 80%.
                  </p>
                  <video controls className="py-8" height="360" width="640">
                    <source src="/botManager.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </Reveal>
              </div>

              <div>
                <Reveal>
                  <p className="font-bold text-lg">Human-Supported Web Chat</p>
                </Reveal>
                <Reveal>
                  <p>
                    Developed web chat service extension. Improve customer engagement metrics by 35%
                    and reduce response time by 50% through the implementation of new features in
                    the human-supported web chat service.
                  </p>
                  <video controls className="py-8" height="360" width="640">
                    <source src="/humanService.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </Reveal>
              </div>
              <div>
                <div className="grid grid-templa" />
              </div>

              <div className="flex justify-between">
                <Reveal>
                  <div>
                    <h3 className="font-bold text-xl uppercase">Freelance</h3>
                    <p className="text-gray-500 flex md:hidden text-sm">January 2022 - July 2022</p>
                    <p className="text-gray-500">Web Developer</p>
                  </div>
                </Reveal>
                <Reveal>
                  <p className="text-gray-500 hidden md:flex">January 2022 - July 2022</p>
                </Reveal>
              </div>
              <div>
                <Reveal>
                  <p>
                    Build modern, responsive and full stack serverless web applications with
                    Next.js.
                  </p>
                  <p> Develop modern SPA applications.</p>
                  <p> Interact with the server-side of the application.</p>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </Element>
    </section>
  );
}
