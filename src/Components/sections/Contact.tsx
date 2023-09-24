'use client';
import { Element } from 'react-scroll';

import ContactBtn from '../ContactButton';

export default function Contact() {
  return (
    <section>
      <Element className="flex flex-col items-center gap-10" name="contact">
        <h2 className="text-5xl font-bold whitespace-nowrap">Contact</h2>
        <p className="text-xl">
          Shoot me an email if you want to connect! You can also find me on{' '}
          <a
            className="text-green-300 hover:underline cursor-pointer"
            href="https://linkedin.com/in/pabloramoss/"
            target="_blank"
          >
            Linkedin
          </a>{' '}
          if that's more your speed.
        </p>
        <ContactBtn />
      </Element>
    </section>
  );
}
