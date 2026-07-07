import AnimatedSection from "./AnimatedSection";
import CTAButton from "./CTAButton";

const services = [
  {
    title: "Trabalho sem carteira assinada",
    description:
      "Trabalhou sem registro? Você tem direito ao reconhecimento do vínculo e a todos os benefícios que deixou de receber.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Acidente de trabalho",
    description:
      "Sofreu um acidente no trabalho ou no trajeto? Você pode ter direito a indenização, estabilidade e benefícios previdenciários.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: "Doença ocupacional",
    description:
      "Desenvolveu alguma doença por causa do trabalho? LER, DORT, problemas na coluna e outros podem gerar direito à indenização.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Horas extras não pagas",
    description:
      "Trabalhou além da jornada sem receber? A lei garante o pagamento correto de todo o tempo dedicado ao empregador.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Desvio e acúmulo de função",
    description:
      "Faz tarefas diferentes ou além do que foi contratado sem receber a mais? Você pode exigir o reconhecimento e a diferença salarial.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Reversão de justa causa",
    description:
      "Foi demitido por justa causa de forma injusta? Podemos reverter a demissão e garantir seus direitos rescisórios.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "Demais causas trabalhistas",
    description:
      "Aposentados, pensionistas, servidores públicos e trabalhadores com qualquer direito violado. Consulte-nos — analisamos seu caso.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <p className="text-brand font-medium text-sm uppercase tracking-widest mb-2">
            Como podemos te ajudar
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand mb-4">
            Você passou por alguma dessas situações?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Se sim, você pode ter direito a uma indenização. Nossa equipe analisa
            seu caso sem custo.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 80}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col gap-4 cursor-default transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-brand text-base mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
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
