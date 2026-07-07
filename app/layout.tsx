import type { Metadata } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beleza & Rodrigues — Advocacia Trabalhista em Porto Velho, RO",
  description:
    "14 anos de experiência em direito trabalhista. Atendemos trabalhadores com direitos violados em todo o Brasil. Fale conosco agora.",
  keywords:
    "advocacia trabalhista Porto Velho, advogado trabalhista RO, direitos trabalhistas, reconhecimento de vínculo, acidente de trabalho",
  openGraph: {
    title: "Beleza & Rodrigues — Advocacia Trabalhista em Porto Velho, RO",
    description:
      "14 anos defendendo trabalhadores. Direito descomplicado, atendimento humanizado.",
    type: "website",
    locale: "pt_BR",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${dmSans.variable}`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
