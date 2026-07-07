import AnimatedSection from "./AnimatedSection";
import CTAButton from "./CTAButton";

const diferenciais = [
  {
    title: "Experiência comprovada",
    description:
      "Atuamos em mais de 2.000 processos na área trabalhista em todo o Brasil. 14 anos defendendo trabalhadores com resultados concretos — 80% de taxa de sucesso.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Direito descomplicado",
    description:
      "Sem juridiquês. O cliente sabe exatamente o que está acontecendo no seu processo, em cada etapa. Acreditamos que você tem o direito de entender sua própria causa.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Atendimento humanizado",
    description:
      "Nosso foco é a causa do cliente. Cada trabalhador é tratado como um ser humano — com respeito, empatia e total dedicação. Aqui, você não é só mais um processo.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-2">
            Por que nos escolher
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand mb-4">
            Direito trabalhista do jeito que o trabalhador merece
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Prezamos pelos direitos trabalhistas e a dignidade no trabalho.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {diferenciais.map((d, i) => (
            <AnimatedSection key={d.title} delay={i * 100}>
              <div
                className="p-8 rounded-2xl border-2 border-gray-100 bg-gray-50 h-full flex flex-col gap-4 transition-all duration-200 hover:border-accent hover:bg-white hover:shadow-md cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand text-accent flex items-center justify-center shrink-0">
                  {d.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-brand text-lg mb-3">
                    {d.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{d.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center">
          <CTAButton size="lg" />
        </div>
      </div>
    </section>
  );
}
