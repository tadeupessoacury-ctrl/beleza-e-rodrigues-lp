import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import CTAButton from "./CTAButton";

const advogados = [
  {
    nome: "Dr. Elson Beleza",
    oab: "OAB/RO",
    bio: "Com mais de 14 anos dedicados ao direito trabalhista, Dr. Elson Beleza construiu sua carreira ao lado dos trabalhadores brasileiros. Especialista em reconhecimento de vínculo empregatício, acidentes de trabalho e causas de alta complexidade, ele acredita que o conhecimento jurídico deve ser acessível a todos. Seu compromisso é garantir que cada cliente entenda cada etapa do processo — sem juridiquês, com transparência e total dedicação.",
  },
  {
    nome: "Dr. Erisson Rodrigues",
    oab: "OAB/RO",
    bio: "Defensor incansável dos direitos trabalhistas, Dr. Erisson Rodrigues combina rigor técnico com atendimento genuinamente humano. Em 14 anos de atuação e mais de 2.000 processos, lidera casos de desvio de função, horas extras não pagas, doenças ocupacionais e reversão de justa causa. Para ele, cada processo é uma causa — e o trabalhador, um ser humano que merece respeito e justiça.",
  },
];

export default function Team() {
  return (
    <section id="equipe" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <p className="text-brand font-medium text-sm uppercase tracking-widest mb-2">
            Nossa equipe
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand mb-4">
            Advogados comprometidos com você
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Conheça os sócios fundadores que há 14 anos lutam pelos direitos dos
            trabalhadores brasileiros.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mb-12">
          <div className="relative rounded-3xl overflow-hidden max-w-2xl mx-auto shadow-xl">
            <Image
              src="/images/equipe.jpeg"
              alt="Equipe Beleza & Rodrigues Advocacia"
              width={800}
              height={533}
              className="w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
              <p className="font-heading font-semibold text-lg">
                Beleza & Rodrigues Advocacia
              </p>
              <p className="text-white/80 text-sm mt-1">Porto Velho, Rondônia</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {advogados.map((adv, i) => (
            <AnimatedSection key={adv.nome} delay={i * 120}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-brand text-lg">
                      {adv.nome}
                    </h3>
                    <p className="text-accent text-sm font-medium">{adv.oab}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">{adv.bio}</p>
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
