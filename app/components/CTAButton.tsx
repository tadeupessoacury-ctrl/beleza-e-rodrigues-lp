"use client";

interface CTAButtonProps {
  text?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline";
}

export default function CTAButton({
  text = "Fale conosco agora",
  className = "",
  size = "md",
  variant = "primary",
}: CTAButtonProps) {
  function getFbCookie(name: string): string {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? match[2] : "";
  }

  function handleClick() {
    const eventId = "lead_" + Date.now();

    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead", { event_id: eventId });
    }

    fetch("/api/capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_id: eventId,
        fbp: getFbCookie("_fbp"),
        fbc: getFbCookie("_fbc"),
        page_url: window.location.href,
      }),
    }).catch(() => {});

    const phone = process.env.NEXT_PUBLIC_WHATSAPP || "69992561864";
    const msg = encodeURIComponent(
      "Olá, vim pelo site e gostaria de saber mais sobre meus direitos trabalhistas."
    );
    window.open(`https://wa.me/55${phone}?text=${msg}`, "_blank");
  }

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const variants = {
    primary:
      "bg-accent text-brand font-bold hover:bg-accent-dark shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-accent text-accent font-bold hover:bg-accent hover:text-brand",
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 rounded-full font-heading transition-all duration-200 cursor-pointer ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <svg
        className="w-5 h-5 shrink-0"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.52 5.849L0 24l6.335-1.496A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.365l-.36-.213-3.727.88.94-3.63-.235-.374A9.819 9.819 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
      </svg>
      {text}
    </button>
  );
}
