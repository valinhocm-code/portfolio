export const metadata = {
  title: "Contato — Miguel Valinho",
  description: "Entre em contato com Miguel Valinho",
};

export default function ContatoPage() {
  return (
    <section className="px-10 py-24 md:py-32">
      <div className="max-w-3xl">
        <p className="text-xs tracking-wide mb-12">CONTATO</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
          Vamos conversar
        </h1>
        <div className="mt-12 space-y-4 text-base md:text-lg">
          <a
            href="mailto:hello@miguelvalinho.com"
            className="link-underline"
          >
            hello@miguelvalinho.com
          </a>
        </div>
      </div>
    </section>
  );
}
