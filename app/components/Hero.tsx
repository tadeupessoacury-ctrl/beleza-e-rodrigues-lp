import type { ReactNode } from "react";
import CTAButton from "./CTAButton";

const stats = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    value: "14+",
    label: "Anos de experiência",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    value: "2.000+",
    label: "Processos trabalhistas",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    value: "80%",
    label: "Taxa de sucesso",
  },
];

const defaultHeadline = (
  <>
    Seus direitos trabalhistas{" "}
    <span className="text-accent">foram violados?</span>
    <br />
    Nós atuamos para você.
  </>
);

const defaultSubheadline = (
  <>
    Atendimento humanizado, direito descomplicado. Você entende cada
    passo do seu processo. Já ajudamos mais de{" "}
    <strong className="text-white font-semibold">2.000 trabalhadores</strong>{" "}
    em todo o Brasil.
  </>
);

type HeroProps = {
  headline?: ReactNode;
  subheadline?: ReactNode;
};

export default function Hero({
  headline = defaultHeadline,
  subheadline = defaultSubheadline,
}: HeroProps) {
  return (
    <section
      className="relative flex items-center justify-center text-white overflow-hidden min-h-[90vh] lg:min-h-screen"
      style={{ backgroundColor: "#00466A" }}
    >

      {/* Estátua — fundo absoluto em todos os tamanhos */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/estatua.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
        style={{ opacity: 0.2 }}
      />

      {/* Conteúdo: centralizado no mobile, coluna direita no desktop */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-14 flex lg:justify-start">
        <div className="w-full text-center lg:text-left lg:w-[52%]">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-white/25 rounded-full px-4 py-1.5 text-[11px] sm:text-xs font-medium text-white/80 mb-7">
            <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
            14 anos defendendo trabalhadores em todo o Brasil
          </div>

          {/* Headline */}
          <h1 className="font-heading font-bold text-[2rem] sm:text-5xl leading-[1.15] mb-5">
            {headline}
          </h1>

          {/* Subtext */}
          <p className="text-[15px] sm:text-lg text-white/75 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
            {subheadline}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-9 max-w-sm mx-auto lg:mx-0">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center lg:items-start gap-0.5">
                <span className="text-accent mb-1">{s.icon}</span>
                <span className="font-heading font-bold text-xl sm:text-2xl leading-none">
                  {s.value}
                </span>
                <span className="text-white/55 text-[10px] sm:text-xs leading-snug text-center lg:text-left">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <CTAButton size="lg" className="justify-center" />
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-heading font-semibold border-2 border-white/50 text-white hover:border-white hover:bg-white/10 transition-all duration-200"
            >
              Ver serviços
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
