import type { Metadata } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SocialProof from "../components/SocialProof";
import Services from "../components/Services";
import Differentials from "../components/Differentials";
import Team from "../components/Team";
import Reviews from "../components/Reviews";
import Location from "../components/Location";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

// Variante B do teste A/B: só a headline e a subheadline mudam.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Trabalhista() {
  return (
    <>
      <Header />
      <main>
        <Hero
          headline={
            <>
              Escritório de Advocacia{" "}
              <span className="text-accent">Trabalhista</span>
            </>
          }
          subheadline={
            <>
              Atuamos em casos de carteira não assinada, horas extras, acidente
              de trabalho, doença ocupacional, justa causa e outras causas
              trabalhistas. Fale com a gente e entenda seus direitos.
            </>
          }
        />
        <SocialProof />
        <Services />
        <Differentials />
        <Team />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
