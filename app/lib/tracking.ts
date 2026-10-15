// Cada variante do teste A/B tem seu próprio container do GTM e rótulo de
// conversão do Google Ads, para sabermos de qual página veio cada conversão.
export const GOOGLE_ADS_ID = "AW-18257144074";

const VARIANTS = {
  home: { gtmId: "GTM-5F9ZSK5N", conversionLabel: "KIV0CI20t8UcEIrS14FE" },
  trabalhista: { gtmId: "GTM-TB38MPRJ", conversionLabel: "mwzECN3q8ZwdEIrS14FE" },
};

export type Variant = keyof typeof VARIANTS;

export function getVariant(pathname: string): Variant {
  return pathname.startsWith("/trabalhista") ? "trabalhista" : "home";
}

export function getGtmId(variant: Variant): string {
  return VARIANTS[variant].gtmId;
}

export function getConversionSendTo(pathname: string): string {
  return `${GOOGLE_ADS_ID}/${VARIANTS[getVariant(pathname)].conversionLabel}`;
}
