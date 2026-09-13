export const metadata = {
  title: "Miguel Valinho",
  description: "Designer baseado em Pelotas, RS",
};

export default function ContatoPage() {
  return (
    <section className="px-10 py-24 md:py-32">
      <div className="max-w-3xl">
        <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
          Vamos conversar
        </h1>
        <div className="mt-12 flex flex-col items-start gap-4 text-base md:text-lg">
          <a href="mailto:valinhocm@gmail.com" className="link-underline inline-block">
            valinhocm@gmail.com
          </a>
          <a
            href="https://wa.me/5553992425445"
            target="_blank"
            rel="noreferrer"
            className="link-underline inline-block"
          >
            +55 (53) 99242-5445
          </a>
        </div>
      </div>
    </section>
  );
}
