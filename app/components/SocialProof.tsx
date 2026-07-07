"use client";

import { useEffect, useRef, useState } from "react";
import CTAButton from "./CTAButton";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  active: boolean;
}

function Counter({ end, suffix = "", prefix = "", duration = 2000, active }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, end, duration]);

  return (
    <span>
      {prefix}
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const metrics = [
    {
      prefix: "",
      end: 14,
      suffix: " anos",
      label: "de experiência na área trabalhista",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      prefix: "+",
      end: 2000,
      suffix: "",
      label: "processos trabalhistas conduzidos",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      prefix: "",
      end: 80,
      suffix: "%",
      label: "taxa de sucesso nos processos",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="prova-social" className="py-20 bg-brand text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-2">
            Resultados comprovados
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl">
            Confiança construída com resultados
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="text-accent flex justify-center mb-4">{m.icon}</div>
              <div className="font-heading font-bold text-4xl sm:text-5xl text-white mb-2">
                <Counter
                  prefix={m.prefix}
                  end={m.end}
                  suffix={m.suffix}
                  active={active}
                  duration={i === 1 ? 2500 : 2000}
                />
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CTAButton variant="outline" />
        </div>
      </div>
    </section>
  );
}
