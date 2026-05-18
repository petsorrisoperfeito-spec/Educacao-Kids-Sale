import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Star,
  Shield,
  Download,
  Printer,
  Users,
  Trophy,
  Clock,
  ChevronDown,
  ChevronUp,
  Instagram,
  Lock,
  Target,
  Lightbulb,
} from "lucide-react";

import heroImg from "@assets/file_000000005a2071f5bf3ba8818b050857_(1)~2_1778972525686.jpg";
import coverImg from "@assets/1753397312-afzst-r2cf-Designsemnome1_1777219596876.png";
import cardsGridImg from "@assets/1000013090_1777471685681.png";
import cardsSpreadImg from "@assets/1000013102_1777471779299.png";
import cardsCloseImg from "@assets/1000013657_1777557301069.png";
import proofCoverImg from "@assets/1000020636_1778973992567.png";
import sample1Img from "@assets/Screenshot_20260516_200447_Drive~2_1778973446866.jpg";
import sample2Img from "@assets/Screenshot_20260516_200605_Drive~2_1778973447120.jpg";
import sample3Img from "@assets/1000020649_1778974934274.png";
import bonus1Img from "@assets/1000020658_1778977029361.png";
import bonus2Img from "@assets/1000020655_1778977029525.png";
import bonus3Img from "@assets/1000020656_1778977029563.png";

const CHECKOUT_LINK = "https://pay.wiapy.com/NGUJSoZC7K";
const CHECKOUT_LINK_BASIC    = "https://pay.wiapy.com/ooK02hM0CH";
const CHECKOUT_LINK_COMPLETE = "https://pay.wiapy.com/1M0u61l7Ug";
const CHECKOUT_LINK_UPSELL   = "https://pay.wiapy.com/_-em4QtoS3";

function CTAButton({ label = "GARANTIR ACESSO AGORA", size = "lg" }: { label?: string; size?: "lg" | "sm" }) {
  const sizeClass = size === "lg"
    ? "text-base md:text-lg px-6 md:px-10 py-4 md:py-5"
    : "text-sm md:text-base px-6 py-4";
  return (
    <a
      href={CHECKOUT_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-cta w-full ${sizeClass}`}
    >
      {label}
    </a>
  );
}

function ScrollCTAButton({ label = "👉 APROVEITAR PROMOÇÃO AGORA", size = "lg" }: { label?: string; size?: "lg" | "sm" }) {
  const sizeClass = size === "lg"
    ? "text-base md:text-lg px-6 md:px-10 py-4 md:py-5"
    : "text-sm md:text-base px-6 py-4";
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("oferta");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <button
      onClick={handleClick}
      className={`btn-cta w-full ${sizeClass}`}
    >
      {label}
    </button>
  );
}

function CountdownTimer() {
  const [t, setT] = useState({ h: 1, m: 59, s: 45 });
  useEffect(() => {
    const id = setInterval(() => {
      setT((p) => {
        let { h, m, s } = p;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 1; m = 59; s = 45; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="flex items-center justify-center gap-3 my-4">
      <span className="text-[#1E293B] font-bold text-sm uppercase tracking-wide">Oferta expira em:</span>
      {[{ v: t.h, l: "horas" }, { v: t.m, l: "min" }, { v: t.s, l: "seg" }].map((c, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="bg-[#1565FF] text-white font-black text-2xl rounded-xl w-14 h-14 flex items-center justify-center shadow-lg">
            {pad(c.v)}
          </div>
          <span className="text-gray-600 text-xs mt-1 font-medium">{c.l}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── 1. URGENCY BAR ─── */
function UrgencyBar() {
  const today = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return (
    <div className="urgency-bar py-3 px-4 text-center sticky top-0 z-50">
      <p className="text-white font-bold text-sm md:text-base tracking-wide">
        🔥 OFERTA VÁLIDA APENAS HOJE — {today}
      </p>
    </div>
  );
}

/* ─── 2. HERO ─── */
function HeroSection() {
  return (
    <section className="hero-bg pt-12 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block bg-[#FFD600] text-[#1E293B] font-extrabold text-xs px-4 py-2 rounded-full mb-5 uppercase tracking-widest shadow badge-animate">
              ✝️ Material Digital Cristão
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-[#1E293B] leading-tight mb-5">
              +420 Dinâmicas Cristãs Infantis + Bônus Exclusivos
            </h1>

            <p className="text-gray-600 text-base md:text-lg mb-7 leading-relaxed max-w-lg mx-auto md:mx-0">
              Atividades bíblicas, criativas e fáceis de aplicar na salinha, EBD, cultinho infantil, culto no lar e programações da igreja.
            </p>

            <ul className="space-y-2 mb-8 text-left max-w-sm mx-auto md:mx-0">
              {[
                "Arquivo digital em PDF — baixe agora",
                "Acesso imediato após pagamento",
                "+420 dinâmicas prontas para aplicar",
                "Ideal para líderes, professores de EBD e pastores",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#1E293B] font-medium text-sm md:text-base">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="max-w-sm mx-auto md:mx-0 space-y-3">
              <ScrollCTAButton label="👉 GARANTIR ACESSO POR R$ 5,90" size="lg" />
              <p className="flex items-center justify-center md:justify-start gap-2 text-gray-500 text-xs font-medium">
                <Lock className="w-4 h-4 text-[#22C55E]" />
                🔒 Compra 100% segura · Liberação imediata
              </p>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="float-img relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#FFD600]/30 to-[#1565FF]/20 rounded-3xl blur-2xl" />
              <img
                src={heroImg}
                alt="+420 Dinâmicas Cristãs Infantis - Material Digital"
                className="relative rounded-3xl shadow-2xl w-full max-w-sm md:max-w-md object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 3. PROVA VISUAL ─── */
function ProofSection() {
  const samples = [
    { src: sample1Img, alt: "Plano Devocional para Crianças", label: "📖 Plano Devocional para Crianças" },
    { src: sample2Img, alt: "Página para colorir bíblica", label: "🎨 Desenhos para Colorir" },
    { src: sample3Img, alt: "Dinâmica estruturada com versículo", label: "📖 +420 Dinâmicas" },
  ];

  return (
    <section className="py-14 px-4 bg-[#F5F7FA]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-[#1E293B] mb-2">
            Conheça o material de perto
          </h2>
          <div className="w-16 h-1.5 bg-[#FFD600] rounded-full mx-auto" />
        </div>

        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-[#FFD600]/30 to-[#1565FF]/20 rounded-3xl blur-xl" />
            <div className="card-product relative p-3 max-w-[260px] w-full transform rotate-1 shadow-2xl">
              <img
                src={proofCoverImg}
                alt="+420 Dinâmicas Cristãs Infantis - Capa do E-book"
                className="w-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-3 -right-3 bg-[#FFD600] text-[#1E293B] text-xs font-black px-3 py-1 rounded-full shadow-md rotate-6">
              ✝️ +420 dinâmicas
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {samples.map((s, i) => (
            <div key={i} className="card-product overflow-hidden">
              <div className="bg-[#1565FF]/5 px-3 py-2 text-center border-b border-gray-100">
                <span className="text-xs font-bold text-[#1565FF]">{s.label}</span>
              </div>
              <img src={s.src} alt={s.alt} className="w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 4. BENEFÍCIOS ─── */
function BenefitsSection() {
  const benefits = [
    { icon: <Target className="w-7 h-7" />, title: "Cultos mais animados", desc: "Transforme qualquer programação infantil em uma experiência inesquecível.", color: "#1565FF" },
    { icon: <Users className="w-7 h-7" />, title: "Mais engajamento", desc: "Toda a criançada participa ativa e animadamente.", color: "#FF7A00" },
    { icon: <Clock className="w-7 h-7" />, title: "Economiza horas de preparo", desc: "Material 100% pronto — é só baixar e aplicar.", color: "#22C55E" },
    { icon: <Printer className="w-7 h-7" />, title: "Pronto para imprimir", desc: "PDF otimizado para qualquer impressora.", color: "#1565FF" },
    { icon: <Trophy className="w-7 h-7" />, title: "+420 dinâmicas bíblicas", desc: "Conteúdo cristão embalado em atividades criativas e divertidas.", color: "#FF7A00" },
    { icon: <Lightbulb className="w-7 h-7" />, title: "Aplicação imediata", desc: "Sem complicação — qualquer líder ou professor de EBD consegue usar.", color: "#22C55E" },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-[#1E293B] mb-3">
            Por que esse material faz{" "}
            <span className="text-[#FF7A00]">tanto sucesso?</span>
          </h2>
          <div className="w-16 h-1.5 bg-[#1565FF] rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div key={i} className="card-product p-6 border border-gray-100 group">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform duration-200"
                style={{ background: b.color }}
              >
                {b.icon}
              </div>
              <h3 className="font-black text-[#1E293B] text-base mb-2">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 5. COMO FUNCIONA ─── */
function HowItWorksSection() {
  const steps = [
    { emoji: "🛒", num: "01", title: "Compra realizada", desc: "Você escolhe o método de pagamento e finaliza com segurança." },
    { emoji: "📥", num: "02", title: "Recebe acesso imediato", desc: "Em instantes, o link para download chega no seu e-mail." },
    { emoji: "🖨️", num: "03", title: "Imprime o material", desc: "Basta imprimir em casa, na igreja ou em qualquer gráfica." },
    { emoji: "🏆", num: "04", title: "Aplica e transforma seu culto", desc: "Aplique na salinha, EBD ou cultinho e veja as crianças se envolverem!" },
  ];

  return (
    <section className="py-16 px-4 bg-[#F5F7FA]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-[#1E293B] mb-3">
            Como <span className="text-[#1565FF]">funciona?</span>
          </h2>
          <div className="w-16 h-1.5 bg-[#FFD600] rounded-full mx-auto" />
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-[2.25rem] top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#1565FF] via-[#FFD600] to-[#22C55E]" />
          <div className="space-y-5">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-5 bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200 relative"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1565FF] to-[#0040CC] flex items-center justify-center shadow-md z-10">
                  <span className="text-xl">{step.emoji}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#1565FF] font-black text-xs tracking-widest">{step.num}</span>
                    <h3 className="font-black text-[#1E293B] text-base">{step.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 max-w-sm mx-auto">
          <ScrollCTAButton size="sm" />
        </div>
      </div>
    </section>
  );
}

/* ─── 6. BÔNUS ─── */
function BonusSection() {
  const bonuses = [
    {
      img: bonus1Img,
      num: "01",
      title: "Potinho de Oração",
      desc: "Atividade criativa para incentivar crianças a criarem o hábito da oração diariamente.",
      oldPrice: "R$ 19,90",
      color: "#ec4899",
    },
    {
      img: bonus2Img,
      num: "02",
      title: "Plano Devocional para Crianças",
      desc: "Plano divertido e simples para aproximar as crianças de Deus todos os dias.",
      oldPrice: "R$ 29,90",
      color: "#1565FF",
    },
    {
      img: bonus3Img,
      num: "03",
      title: "Desenhos Bíblicos para Colorir",
      desc: "Desenhos educativos cristãos prontos para imprimir e colorir.",
      oldPrice: "R$ 24,90",
      color: "#FF7A00",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#FFD600] text-[#1E293B] font-black text-xs px-5 py-2 rounded-full mb-4 uppercase tracking-widest shadow badge-animate">
            ✨ Exclusivo para você
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-[#1E293B] mb-3">
            🎁 BÔNUS EXCLUSIVOS
          </h2>
          <div className="w-16 h-1.5 bg-[#FFD600] rounded-full mx-auto mb-4" />
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Além das dinâmicas cristãs infantis, você também recebe materiais bônus especiais{" "}
            <strong className="text-[#1E293B]">totalmente grátis!</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {bonuses.map((b, i) => (
            <div key={i} className="card-product p-5 flex flex-col items-center text-center">
              <div className="relative mb-4 w-full">
                <img
                  src={b.img}
                  alt={b.title}
                  className="w-full object-cover rounded-2xl aspect-square"
                  loading="lazy"
                />
                <div
                  className="absolute -top-3 -left-3 w-9 h-9 rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg"
                  style={{ background: b.color }}
                >
                  {b.num}
                </div>
              </div>
              <h3 className="font-black text-[#1E293B] text-base mb-2">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{b.desc}</p>
              <div className="mt-auto">
                <p className="text-gray-400 text-sm mb-1">
                  De <span className="line-through text-[#EF4444] font-bold">{b.oldPrice}</span>
                </p>
                <p className="gratis-pulse text-2xl font-black text-[#22C55E]">GRÁTIS 🎉</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-sm mx-auto">
          <ScrollCTAButton size="sm" />
        </div>
      </div>
    </section>
  );
}

/* ─── UPSELL MODAL ─── */
function UpsellModal({ onClose }: { onClose: () => void }) {
  const goBasic = () => {
    onClose();
    window.open(CHECKOUT_LINK_BASIC, "_blank", "noopener,noreferrer");
  };
  const goUpsell = () => {
    onClose();
    window.open(CHECKOUT_LINK_UPSELL, "_blank", "noopener,noreferrer");
  };

  const upsellItems = [
    "420+ Dinâmicas Cristãs Infantis",
    "Jogos Bíblicos Educativos",
    "Material Premium para EBD",
    "Atualizações futuras",
    "Recebimento imediato",
  ];
  const upsellBonuses = [
    "Potinho da Oração",
    "Desenhos Bíblicos para Colorir",
    "Plano Devocional para Crianças",
  ];

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) goBasic(); }}>
      <div className="modal-box">
        <button className="modal-close" onClick={goBasic} aria-label="Fechar">✕</button>

        <div className="text-center mb-4">
          <div className="inline-block bg-[#dc2626] text-white font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 shadow">
            ⚡ ESPERE! OFERTA ESPECIAL
          </div>
          <p className="text-[#1E293B] font-bold text-base leading-snug">
            Antes de continuar, faça o upgrade para o Plano Completo com{" "}
            <span className="text-[#dc2626]">desconto exclusivo de hoje</span>
          </p>
        </div>

        <div className="text-center mb-4">
          <p className="text-gray-400 text-sm mb-1">
            De <span className="line-through text-[#EF4444] font-bold">R$ 19,90</span>
          </p>
          <div className="flex items-end justify-center gap-1">
            <span className="text-[#22C55E] font-black text-2xl mb-1">R$</span>
            <span className="text-[#22C55E] font-black text-5xl leading-none">12</span>
            <span className="text-[#22C55E] font-black text-2xl mb-1">,90</span>
          </div>
          <p className="text-gray-500 text-xs mt-1 font-medium">Acesso imediato + bônus exclusivos</p>
        </div>

        <ul className="space-y-2 mb-4">
          {upsellItems.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-[#1E293B] text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="rounded-2xl border border-[#22C55E]/30 bg-[#f0fdf4] px-4 py-3 mb-5">
          <p className="text-[#15803d] font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-1.5">
            🎁 <span>BÔNUS INCLUSOS HOJE</span>
          </p>
          <ul className="space-y-1.5">
            {upsellBonuses.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-[#15803d] text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <button onClick={goUpsell} className="btn-cta-premium w-full mb-3 text-sm md:text-base">
          QUERO O DESCONTO DE R$12,90
        </button>

        <button
          onClick={goBasic}
          className="w-full text-center text-gray-400 text-xs font-medium hover:text-gray-600 transition-colors py-1"
        >
          Não, quero continuar com o plano básico
        </button>
      </div>
    </div>
  );
}

/* ─── 7. PLANOS ─── */
function PlansSection() {
  const [showUpsell, setShowUpsell] = useState(false);

  const basicItems = [
    "100 Dinâmicas Cristãs Infantis",
    "Acesso imediato",
    "Arquivo em PDF",
    "Uso em igreja e EBD",
  ];
  const completeMain = [
    "+420 Dinâmicas Cristãs Infantis",
    "Jogos Bíblicos Educativos",
    "Material Premium para EBD",
    "Atualizações futuras",
    "Acesso imediato",
    "__whatsapp__",
  ];
  const completeBonuses = [
    "Potinho de Oração",
    "Plano Devocional para Crianças",
    "Desenhos Bíblicos para Colorir",
  ];

  return (
    <>
      {showUpsell && <UpsellModal onClose={() => setShowUpsell(false)} />}

      <section id="oferta" className="py-16 px-4 bg-gradient-to-br from-[#fffde7] to-[#fff8e1]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#dc2626] text-white font-black text-sm px-5 py-2 rounded-full mb-4 uppercase tracking-widest badge-animate shadow-lg">
              🔥 OFERTA ESPECIAL DE HOJE
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#1E293B] mb-2">
              Escolha o melhor plano para você
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

            {/* ── PLANO BÁSICO ── */}
            <div className="bg-white rounded-3xl p-7 shadow-lg border-2 border-gray-200 text-center flex flex-col">
              <h3 className="text-xl font-black text-[#1E293B] mb-1">Plano Básico</h3>
              <div className="flex items-end justify-center gap-1 my-4">
                <span className="text-[#22C55E] font-black text-2xl mb-1">R$</span>
                <span className="text-[#22C55E] font-black text-5xl leading-none">5</span>
                <span className="text-[#22C55E] font-black text-2xl mb-1">,90</span>
              </div>
              <ul className="space-y-2.5 mb-7 text-left">
                {basicItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-[#1E293B] text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <button
                  onClick={() => setShowUpsell(true)}
                  className="btn-cta w-full text-sm py-4"
                >
                  QUERO O PLANO BÁSICO
                </button>
              </div>
            </div>

            {/* ── PLANO COMPLETO ── */}
            <div className="plan-featured bg-white rounded-3xl p-7 shadow-2xl border-[3px] border-[#FFD600] text-center flex flex-col relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                <div className="bg-[#FFD600] text-[#1E293B] font-black text-xs px-5 py-1.5 rounded-full shadow-md uppercase tracking-widest whitespace-nowrap">
                  ⭐ MAIS ESCOLHIDO
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-black text-[#1E293B] mb-1">Plano Completo</h3>
                <p className="text-sm text-gray-400 font-medium mb-1">
                  De <span className="line-through text-[#EF4444] font-bold">R$ 97,90</span>
                </p>
                <div className="price-pulse-complete gap-1 mb-4 justify-center">
                  <span className="text-[#22C55E] font-black text-2xl mb-1">R$</span>
                  <span className="text-[#22C55E] font-black text-5xl leading-none">19</span>
                  <span className="text-[#22C55E] font-black text-2xl mb-1">,90</span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-4 text-left">
                {completeMain.map((item, i) =>
                  item === "__whatsapp__" ? (
                    <li key={i} className="flex items-center gap-2.5 text-[#1E293B] text-sm font-medium">
                      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="#25D366"/>
                        <path d="M23.5 8.5A10.47 10.47 0 0 0 16 5.5C10.2 5.5 5.5 10.2 5.5 16c0 1.85.49 3.65 1.41 5.23L5.5 26.5l5.41-1.41A10.46 10.46 0 0 0 16 26.5c5.8 0 10.5-4.7 10.5-10.5 0-2.8-1.09-5.43-3-7.5zM16 24.77a8.73 8.73 0 0 1-4.45-1.22l-.32-.19-3.21.84.86-3.13-.21-.33A8.73 8.73 0 0 1 7.23 16c0-4.84 3.93-8.77 8.77-8.77A8.77 8.77 0 0 1 24.77 16c0 4.84-3.93 8.77-8.77 8.77zm4.81-6.57c-.26-.13-1.55-.77-1.79-.85-.24-.09-.41-.13-.58.13-.17.26-.66.85-.81 1.02-.15.17-.3.19-.56.06-.26-.13-1.1-.41-2.1-1.3-.78-.69-1.3-1.55-1.45-1.81-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.8-1.92-.21-.5-.43-.43-.58-.44h-.5c-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.14s.92 2.49 1.05 2.66c.13.17 1.81 2.77 4.38 3.88.61.26 1.09.42 1.46.54.61.19 1.17.16 1.61.1.49-.07 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3z" fill="white"/>
                      </svg>
                      Receba pelo WhatsApp
                    </li>
                  ) : (
                    <li key={i} className="flex items-center gap-2.5 text-[#1E293B] text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <div className="rounded-2xl border border-[#22C55E]/30 bg-[#f0fdf4] px-4 py-3 mb-5">
                <p className="text-[#15803d] font-black text-xs uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
                  🎁 <span>Bônus Grátis inclusos</span>
                </p>
                <ul className="space-y-2">
                  {completeBonuses.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#15803d] text-sm font-semibold">
                      <span className="text-base leading-none">🎁</span>
                      <span>{item}</span>
                      <span className="ml-auto text-[10px] font-black bg-[#22C55E] text-white px-2 py-0.5 rounded-full whitespace-nowrap">GRÁTIS</span>
                    </li>
                  ))}
                </ul>
              </div>

              <CountdownTimer />

              <div className="mt-4">
                <a
                  href={CHECKOUT_LINK_COMPLETE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-premium"
                >
                  QUERO ACESSO COMPLETO AGORA
                </a>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#22C55E]" />Pagamento seguro</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#22C55E]" />Liberação imediata</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

/* ─── 8. GARANTIA ─── */
function GuaranteeSection() {
  return (
    <section className="py-14 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-3xl p-8 border-2 border-[#22C55E]/40 text-center shadow-lg">
          <div className="w-20 h-20 bg-gradient-to-br from-[#22C55E] to-[#16a34a] rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-[#1E293B] mb-4">
            🛡 Compra Segura
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-lg mx-auto mb-6">
            Ao concluir o pagamento, seu acesso é enviado{" "}
            <strong className="text-[#22C55E]">imediatamente</strong> para o seu e-mail. Caso tenha qualquer dificuldade, nossa equipe oferece suporte completo para garantir que você consiga usar o material.
          </p>
          <div className="flex flex-wrap justify-center gap-5 text-sm text-[#16a34a] font-semibold">
            <span className="flex items-center gap-1.5"><Lock className="w-4 h-4" />Dados protegidos</span>
            <span className="flex items-center gap-1.5"><Download className="w-4 h-4" />Download garantido</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" />Suporte humanizado</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 9. DEPOIMENTOS ─── */
function TestimonialsSection() {
  const testimonials = [
    {
      text: "As crianças amaram as dinâmicas! O cultinho virou uma festinha — todo mundo querendo participar. Nunca vi tanto engajamento em tão pouco tempo.",
      name: "Ana Paula S.",
      role: "Líder de Culto Infantil",
      initial: "A",
      color: "#1565FF",
    },
    {
      text: "Economizei muito tempo de preparo. O material já vem pronto, organizado e super bonito. Vale muito o investimento — já usei em vários encontros!",
      name: "Carla M.",
      role: "Professora de EBD",
      initial: "C",
      color: "#22C55E",
    },
    {
      text: "Material lindo e super fácil de aplicar. Imprimi, reuni a criançada e em cinco minutos já estava rolando a atividade. Recomendo demais!",
      name: "Marcos A.",
      role: "Pastor de Crianças",
      initial: "M",
      color: "#FF7A00",
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#F5F7FA]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-[#1E293B] mb-3">
            Quem comprou <span className="text-[#1565FF]">aprovou</span>
          </h2>
          <div className="w-16 h-1.5 bg-[#FFD600] rounded-full mx-auto mb-4" />
          <p className="text-gray-500 text-sm">Resultados reais de quem já usa em sala de aula</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-[#FFD600] text-[#FFD600]" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed italic mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-lg shadow"
                  style={{ background: t.color }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="font-black text-[#1E293B] text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 10. FAQ ─── */
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "Como recebo o material após a compra?", a: "Assim que o pagamento for confirmado, você recebe um e-mail com o link para download imediato. Em menos de 5 minutos o arquivo já está com você!" },
    { q: "É físico ou digital?", a: "100% digital em formato PDF. Você faz o download e imprime quantas vezes quiser — sem espera por frete, sem custo extra." },
    { q: "Posso imprimir quantas vezes quiser?", a: "Sim! O arquivo é seu para sempre. Imprima para quantos grupos precisar, o ano todo, sem nenhum custo adicional." },
    { q: "Serve para qual faixa etária?", a: "O material foi pensado para crianças, ideal para salinha, EBD, cultinho infantil, culto no lar e qualquer programação da igreja." },
    { q: "O pagamento é seguro?", a: "Totalmente! Utilizamos plataformas de pagamento com criptografia de ponta. Seus dados estão 100% protegidos." },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-[#1E293B] mb-3">
            Perguntas <span className="text-[#FF7A00]">Frequentes</span>
          </h2>
          <div className="w-16 h-1.5 bg-[#FF7A00] rounded-full mx-auto" />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:border-[#1565FF]/40 transition-colors duration-200"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-blue-50/50 transition-colors duration-150"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-bold text-[#1E293B] text-sm md:text-base pr-4">{faq.q}</span>
                {open === i
                  ? <ChevronUp className="w-5 h-5 text-[#1565FF] flex-shrink-0" />
                  : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4 bg-white">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ─── FINAL CTA ─── */
function FinalCTASection() {
  return (
    <section className="py-14 px-4 section-blue">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-5xl mb-4 float-img inline-block">🚀</div>
        <h2 className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight">
          Seus cultos infantis nunca mais vão ser os mesmos!
        </h2>
        <p className="text-blue-100 text-base md:text-lg mb-8 max-w-md mx-auto">
          Junte-se a centenas de líderes e professores de EBD que já transformaram suas programações com as Dinâmicas Cristãs Infantis.
        </p>
        <div className="max-w-sm mx-auto space-y-4">
          <ScrollCTAButton label="GARANTIR ACESSO POR R$ 5,90" size="lg" />
          <div className="flex flex-wrap justify-center gap-4 text-blue-200/80 text-xs font-medium">
            <span>🔒 Compra segura</span>
            <span>📥 Acesso imediato</span>
            <span>🖨️ Pronto para imprimir</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── RODAPÉ ─── */
function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-10 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <a
          href="https://www.instagram.com/educacaokids_ofc?igsh=ZzZnNW91eHhqenZ6"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-footer"
        >
          <Instagram className="instagram-icon" />
          @educacaokids_ofc
        </a>
        <div className="border-t border-gray-800 mt-2 pt-5">
          <p className="text-gray-600 text-sm">© Educação Kids — Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function LandingPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <UrgencyBar />
      <HeroSection />
      <ProofSection />
      <BenefitsSection />
      <HowItWorksSection />
      <BonusSection />
      <PlansSection />
      <GuaranteeSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
