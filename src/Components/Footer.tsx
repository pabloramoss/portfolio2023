import { config } from '@/config';

export default function Footer() {
  return (
    <footer className="grid text-center uppercase tracking-wide text-xs gap-4">
      <div className="flex gap-2 items-center justify-center flex-1">
        {config.socialMedia.map((socialMedia) => (
          <a key={socialMedia.name} href={socialMedia.url} rel="noreferrer" target="_blank">
            <img src="https://via.placeholder.com/30" />
          </a>
        ))}
      </div>
      <p>Made with Next.js</p>
    </footer>
  );
}
