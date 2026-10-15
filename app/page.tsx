import GoogleTagManager from "./components/GoogleTagManager";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Services from "./components/Services";
import Differentials from "./components/Differentials";
import Team from "./components/Team";
import Reviews from "./components/Reviews";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <GoogleTagManager variant="home" />
      <Header />
      <main>
        <Hero />
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
