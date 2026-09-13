export const metadata = {
  title: "Sobre — Miguel Valinho",
  description: "Sobre Miguel Valinho, designer e estudante de Design",
};

export default function SobrePage() {
  return (
    <section className="px-10 py-24 md:py-32">
      <div className="max-w-3xl">
        <p className="text-xs tracking-wide mb-12">SOBRE</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
          Miguel Valinho
        </h1>
        <div className="mt-12 max-w-2xl space-y-6 text-base md:text-lg leading-relaxed text-neutral-700">
          <p>
            Designer interessado em identidade, estratégia e comunicação.
          </p>
          <p>
            Este espaço reúne projetos, experimentos e trabalhos selecionados.
          </p>
        </div>
      </div>
    </section>
  );
}
