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

import heroImg from "@assets/1753401907-afzst-r2cf-Designsemnome5_1777219596784.png";
import coverImg from "@assets/1753397312-afzst-r2cf-Designsemnome1_1777219596876.png";
import cardsGridImg from "@assets/1000013090_1777471685681.png";
import cardsSpreadImg from "@assets/1000013102_1777471779299.png";
import cardsCloseImg from "@assets/1000013657_1777557301069.png";

const CHECKOUT_LINK = "https://pay.wiapy.com/NGUJSoZC7K";

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
              🎓 Material Digital para Professores
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-[#1E293B] leading-tight mb-5">
              👉 Faça Seus Alunos Aprenderem Brincando
            </h1>

            <p className="text-gray-600 text-base md:text-lg mb-7 leading-relaxed max-w-lg mx-auto md:mx-0">
              Passa ou Repassa com 60 perguntas de Matemática, Português, Ciências, Geografia e História.
            </p>

            <ul className="space-y-2 mb-8 text-left max-w-sm mx-auto md:mx-0">
              {[
                "Arquivo digital em PDF — baixe agora",
                "Acesso imediato após pagamento",
                "Material 100% pronto para usar",
                "Ideal para professores e reforço escolar",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#1E293B] font-medium text-sm md:text-base">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="max-w-sm mx-auto md:mx-0 space-y-3">
              <CTAButton label="👉 GARANTIR ACESSO POR R$ 9,90" size="lg" />
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
                alt="Passa ou Repassa 4º e 5º Ano - Material Digital"
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
  return (
    <section className="py-14 px-4 bg-[#F5F7FA]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-[#1E293B] mb-2">
            Conheça o material de perto
          </h2>
          <div className="w-16 h-1.5 bg-[#FFD600] rounded-full mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="card-product">
            <img src={coverImg} alt="Capa do material Passa ou Repassa" className="w-full object-cover" loading="lazy" />
          </div>
          <div className="card-product">
            <img src={cardsGridImg} alt="Cards de perguntas do Passa ou Repassa" className="w-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 4. BENEFÍCIOS ─── */
function BenefitsSection() {
  const benefits = [
    { icon: <Target className="w-7 h-7" />, title: "Aulas mais divertidas", desc: "Transforme qualquer aula em uma experiência inesquecível.", color: "#1565FF" },
    { icon: <Users className="w-7 h-7" />, title: "Mais engajamento", desc: "Toda a turma participa ativa e animadamente.", color: "#FF7A00" },
    { icon: <Clock className="w-7 h-7" />, title: "Economiza horas de preparo", desc: "Material 100% pronto — é só imprimir e aplicar.", color: "#22C55E" },
    { icon: <Printer className="w-7 h-7" />, title: "Pronto para imprimir", desc: "PDF otimizado para qualquer impressora.", color: "#1565FF" },
    { icon: <Trophy className="w-7 h-7" />, title: "Gamificação inteligente", desc: "Conteúdo pedagógico embalado em competição saudável.", color: "#FF7A00" },
    { icon: <Lightbulb className="w-7 h-7" />, title: "Aplicação imediata", desc: "Sem complicação — qualquer professor consegue usar.", color: "#22C55E" },
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
    { emoji: "🖨️", num: "03", title: "Imprime o material", desc: "Basta imprimir em casa, na escola ou em qualquer gráfica." },
    { emoji: "🏆", num: "04", title: "Aplica e transforma sua aula", desc: "Divida a turma, comece as perguntas e veja a magia acontecer!" },
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

/* ─── 6. GALERIA ─── */
function GallerySection() {
  const photos = [
    { src: cardsSpreadImg, alt: "Cartas espalhadas do Passa ou Repassa" },
    { src: cardsCloseImg, alt: "Cartas coloridas em leque" },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-[#1E293B] mb-3">
            Veja como é <span className="text-[#FF7A00]">lindo e completo</span>
          </h2>
          <div className="w-16 h-1.5 bg-[#FF7A00] rounded-full mx-auto mb-4" />
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Material colorido, vibrante e profissional — seus alunos vão se empolgar só de ver!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {photos.map((p, i) => (
            <div key={i} className="card-product">
              <img src={p.src} alt={p.alt} className="w-full object-cover aspect-square" loading="lazy" />
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

/* ─── 7. OFERTA ─── */
function OfferSection() {
  return (
    <section id="oferta" className="py-16 px-4 bg-gradient-to-br from-[#fffde7] to-[#fff8e1]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-[#dc2626] text-white font-black text-sm px-5 py-2 rounded-full mb-6 uppercase tracking-widest badge-animate shadow-lg">
            🔥 OFERTA ESPECIAL DE HOJE
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-[#1E293B] mb-2">
            Garanta agora pelo melhor preço
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-[#FFD600] text-center">
          <div className="flex justify-center mb-4">
            <img
              src={coverImg}
              alt="Material Passa ou Repassa"
              className="w-36 h-36 object-cover rounded-2xl shadow-lg wiggle-img"
              loading="lazy"
            />
          </div>

          <p className="text-gray-500 text-base font-medium mb-2">
            De{" "}
            <span className="line-through font-extrabold text-[#EF4444]">
              R$ 37,90
            </span>{" "}
            por apenas:
          </p>

          <div className="price-pulse-wrap flex items-end justify-center gap-1 mb-2">
            <span className="text-[#22C55E] font-black text-3xl mb-3 drop-shadow-sm">R$</span>
            <span className="price-big">9</span>
            <span className="text-[#22C55E] font-black text-4xl mb-3 drop-shadow-sm">,90</span>
          </div>

          <div className="inline-block bg-[#22C55E]/10 text-[#16a34a] font-bold text-xs px-4 py-1.5 rounded-full mb-6 border border-[#22C55E]/30">
            ✅ VOCÊ ECONOMIZA R$ 28,00 AGORA
          </div>

          <CountdownTimer />

          <div className="mt-6 max-w-xs mx-auto">
            <CTAButton label="GARANTIR ACESSO AGORA" size="lg" />
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-gray-500 font-medium">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#22C55E]" />Pagamento seguro</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#22C55E]" />Liberação imediata</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#22C55E]" />Promoção por tempo limitado</span>
          </div>
        </div>
      </div>
    </section>
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
      text: "Meus alunos amaram a dinâmica! A aula virou uma festinha — todo mundo querendo participar. Nunca vi tanto engajamento em tão pouco tempo.",
      name: "Ana Paula S.",
      role: "Professora do 5º Ano",
      initial: "A",
      color: "#1565FF",
    },
    {
      text: "Economizei muito tempo de preparo. O material já vem pronto, organizado e super bonito. Vale muito o investimento — já usei com três turmas!",
      name: "Carla M.",
      role: "Pedagoga",
      initial: "C",
      color: "#22C55E",
    },
    {
      text: "Material lindo e super fácil de aplicar. Imprimi, dividi a turma e em cinco minutos já estava rolando a gincana. Recomendo demais!",
      name: "Marcos A.",
      role: "Professor de Reforço",
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
    { q: "Posso imprimir quantas vezes quiser?", a: "Sim! O arquivo é seu para sempre. Imprima para quantas turmas precisar, o ano todo, sem nenhum custo adicional." },
    { q: "Serve para reforço escolar?", a: "Com certeza! Funciona perfeitamente para aulas particulares, reforço, cursinhos, escolas e até em casa com os filhos." },
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
          Suas aulas nunca mais vão ser as mesmas!
        </h2>
        <p className="text-blue-100 text-base md:text-lg mb-8 max-w-md mx-auto">
          Junte-se a centenas de professores que já revolucionaram suas salas de aula com o Passa ou Repassa.
        </p>
        <div className="max-w-sm mx-auto space-y-4">
          <CTAButton label="GARANTIR ACESSO POR R$ 9,90" size="lg" />
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
      <GallerySection />
      <OfferSection />
      <GuaranteeSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
