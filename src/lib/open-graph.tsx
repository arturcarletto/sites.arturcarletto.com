/* eslint-disable @next/next/no-img-element */

export type OpenGraphCard = {
  title: string;
  subtitle: string;
  eyebrow: string;
  accent: string;
  background: string;
  foreground: string;
  images: Array<{
    src: string;
    label: string;
    position?: string;
  }>;
};

export const openGraphCards: Record<string, OpenGraphCard> = {
  home: {
    title: "Sites que abrem conversas.",
    subtitle: "Sites, landing pages e soluções digitais para empresas.",
    eyebrow: "ARTUR CARLETTO · ENGENHEIRO DE SOFTWARE",
    accent: "#2459e0",
    background: "#f4f2ed",
    foreground: "#171918",
    images: [
      { src: "automotiva-hero.png", label: "ESTÉTICA AUTOMOTIVA", position: "58% center" },
      { src: "odontologia-hero.png", label: "ODONTOLOGIA", position: "center" },
      { src: "climatizacao-hero.png", label: "CLIMATIZAÇÃO", position: "62% center" },
    ],
  },
  climatizacao: {
    title: "Climatização",
    subtitle: "Uma experiência objetiva para facilitar pedidos de orçamento.",
    eyebrow: "CONCEITO DEMONSTRATIVO · ARTUR CARLETTO",
    accent: "#20b9d6",
    background: "#062f39",
    foreground: "#ffffff",
    images: [{ src: "climatizacao-hero.png", label: "SITE PARA CLIMATIZAÇÃO", position: "58% center" }],
  },
  odontologia: {
    title: "Odontologia",
    subtitle: "Clareza e acolhimento antes do primeiro agendamento.",
    eyebrow: "CONCEITO DEMONSTRATIVO · ARTUR CARLETTO",
    accent: "#8fc7bf",
    background: "#e8f0ed",
    foreground: "#173d39",
    images: [{ src: "odontologia-hero.png", label: "SITE PARA ODONTOLOGIA", position: "center" }],
  },
  "moveis-planejados": {
    title: "Móveis planejados",
    subtitle: "Uma direção editorial para apresentar matéria, processo e projeto.",
    eyebrow: "CONCEITO DEMONSTRATIVO · ARTUR CARLETTO",
    accent: "#b06a52",
    background: "#eee8dc",
    foreground: "#2f251e",
    images: [{ src: "moveis-hero.png", label: "SITE PARA MÓVEIS PLANEJADOS", position: "center" }],
  },
  "estetica-automotiva": {
    title: "Estética automotiva",
    subtitle: "Contraste e precisão para apresentar serviços de cuidado automotivo.",
    eyebrow: "CONCEITO DEMONSTRATIVO · ARTUR CARLETTO",
    accent: "#d09a5d",
    background: "#0b0c0d",
    foreground: "#ffffff",
    images: [{ src: "automotiva-hero.png", label: "SITE PARA ESTÉTICA AUTOMOTIVA", position: "55% center" }],
  },
};

export function OpenGraphArtwork({
  card,
  imageSources,
}: {
  card: OpenGraphCard;
  imageSources: string[];
}) {
  const isHome = card.images.length > 1;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: 52,
        position: "relative",
        display: "flex",
        overflow: "hidden",
        background: card.background,
        color: card.foreground,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: isHome ? "52%" : "48%",
          height: "100%",
          paddingRight: 44,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 58,
              height: 58,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `2px solid ${card.accent}`,
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: "-1px",
            }}
          >
            AC
          </div>
          <div style={{ display: "flex", color: card.accent, fontSize: 17, fontWeight: 800, letterSpacing: "1.4px" }}>
            {card.eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", maxWidth: 610, fontSize: isHome ? 66 : 70, lineHeight: 0.96, letterSpacing: "-4px", fontWeight: 650 }}>
            {card.title}
          </div>
          <div style={{ display: "flex", maxWidth: 570, marginTop: 26, color: isHome ? "#555a55" : card.foreground, opacity: 0.78, fontSize: 24, lineHeight: 1.35 }}>
            {card.subtitle}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 13, fontSize: 17, fontWeight: 750 }}>
          <div style={{ width: 34, height: 3, display: "flex", background: card.accent }} />
          sites.arturcarletto.com
        </div>
      </div>

      {isHome ? (
        <div style={{ width: "48%", height: "100%", position: "relative", display: "flex" }}>
          <div style={{ width: 430, height: 430, position: "absolute", right: 64, top: 43, display: "flex", border: "1px solid #c9c7c0", borderRadius: "50%" }} />
          <div style={{ width: 360, height: 430, position: "absolute", left: 4, bottom: 0, display: "flex", overflow: "hidden", background: "#111", boxShadow: "0 22px 50px rgba(15,18,16,.22)", transform: "rotate(-2deg)" }}>
            <img src={imageSources[0]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: card.images[0].position }} />
            <div style={{ position: "absolute", left: 18, right: 18, bottom: 18, padding: "15px 17px", display: "flex", background: "rgba(12,15,14,.86)", color: "white", fontSize: 16, fontWeight: 800, letterSpacing: "1px" }}>{card.images[0].label}</div>
          </div>
          <div style={{ width: 235, height: 205, position: "absolute", right: 4, top: 0, display: "flex", overflow: "hidden", border: "8px solid #f4f2ed", background: "#ddd", boxShadow: "0 18px 38px rgba(15,18,16,.2)", transform: "rotate(2deg)" }}>
            <img src={imageSources[1]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: card.images[1].position }} />
            <div style={{ position: "absolute", left: 12, bottom: 12, padding: "10px 12px", display: "flex", background: "rgba(21,45,42,.9)", color: "white", fontSize: 13, fontWeight: 800 }}>{card.images[1].label}</div>
          </div>
          <div style={{ width: 164, height: 285, position: "absolute", right: 24, bottom: 10, display: "flex", overflow: "hidden", border: "8px solid #f4f2ed", borderRadius: 22, background: "#ddd", boxShadow: "0 18px 38px rgba(15,18,16,.24)" }}>
            <img src={imageSources[2]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: card.images[2].position }} />
          </div>
        </div>
      ) : (
        <div style={{ width: "52%", height: "100%", position: "relative", display: "flex", overflow: "hidden", border: `10px solid ${card.accent}`, background: "#111", boxShadow: "0 24px 60px rgba(0,0,0,.28)" }}>
          <img src={imageSources[0]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: card.images[0].position }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", background: "linear-gradient(180deg, transparent 45%, rgba(0,0,0,.78))" }} />
          <div style={{ position: "absolute", left: 20, right: 20, bottom: 20, padding: "16px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(8,10,9,.86)", color: "white", fontSize: 17, fontWeight: 800, letterSpacing: "1.2px" }}>
            <span>{card.images[0].label}</span>
            <span style={{ color: "white" }}>ABRIR CONCEITO</span>
          </div>
        </div>
      )}
    </div>
  );
}
