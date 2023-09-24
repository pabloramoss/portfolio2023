'use client';
import { Element } from 'react-scroll';

import SectionTitle from '../SectionTitle';

export default function About() {
  return (
    <section>
      <Element className="grid gap-10" name="about">
        <SectionTitle title="About me" />
        <p>
          I’m a frontend developer specializing in building (and occasionally designing) exceptional
          digital experiences. Currently, I’m focused on building an app to simplify bot creation
          process through a visual chatbot builder at{' '}
          <a
            className="font-bold hover:text-green-300"
            href="https://www.inceptia.ai/"
            rel="noreferrer"
            target="_blank"
          >
            Inceptia AI
          </a>
          .
        </p>
      </Element>
    </section>
  );
}
