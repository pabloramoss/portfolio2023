import ContactBtn from '../ContactButton';

export default function Hero() {
  return (
    <section className="flex flex-col gap-4">
      <div className="grid">
        <h2 className="font-extrabold text-xl">Hi, my name is</h2>
        <h1 className="font-extrabold text-5xl">Pablo Ramos</h1>
      </div>
      <div className="grid">
        <h2 className="text-xl">
          I'm{' '}
          <span className="text-green-300 font-extrabold whitespace-nowrap">
            Frontend Developer
          </span>
        </h2>
        <h2>I build things for the web</h2>
      </div>
      <ContactBtn />
    </section>
  );
}
