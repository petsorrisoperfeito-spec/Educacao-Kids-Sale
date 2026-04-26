import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Star,
  Shield,
  Download,
  Printer,
  Users,
  Trophy,
  Clock,
  Zap,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Instagram,
  AlertTriangle,
} from "lucide-react";

const CHECKOUT_LINK = "https://pay.kiwify.com.br/placeholder";

function useScrollAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, isInView };
}

function CTAButton({ label = "👉 GARANTIR ACESSO AGORA", size = "lg" }: { label?: string; size?: "sm" | "lg" }) {
  const sizeClasses = size === "lg"
    ? "text-lg md:text-2xl px-8 py-5 rounded-2xl"
    : "text-base px-6 py-4 rounded-xl";
  return (
    <a
      href={CHECKOUT_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-btn animate-pulse-cta inline-block text-white font-extrabold uppercase tracking-wide cursor-pointer w-full text-center ${sizeClasses}`}
    >
      {label}
    </a>
  );
}

function CountdownTimer() {
  const [time, setTime] = useState({ h: 1, m: 59, s: 45 });
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 1; m = 59; s = 45; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-2 my-4">
      <span className="text-white font-bold text-sm uppercase tracking-wider mr-2">Oferta expira em:</span>
      {[{ v: time.h, l: "horas" }, { v: time.m, l: "min" }, { v: time.s, l: "seg" }].map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="bg-white text-red-600 font-extrabold text-2xl rounded-lg w-14 h-14 flex items-center justify-center shadow-lg">
            {pad(item.v)}
          </div>
          <span className="text-white text-xs mt-1">{item.l}</span>
        </div>
      ))}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero-gradient relative overflow-hidden pb-12 pt-8">
      <div className="absolute inset-0 pointer-events-none">
        {["⭐", "🎉", "📚", "🏆", "✨", "🎯"].map((emoji, i) => (
          <span
            key={i}
            className="absolute text-2xl opacity-20 animate-float"
            style={{
              top: `${10 + i * 15}%`,
              left: i % 2 === 0 ? `${5 + i * 8}%` : `${75 + i * 3}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          >{emoji}</span>
        ))}
      </div>

      <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-yellow-400 text-blue-900 font-extrabold text-xs md:text-sm px-4 py-2 rounded-full mb-4 uppercase tracking-widest shadow-md animate-bounce-slow">
            🔥 Material Digital Exclusivo para Professores
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
            🎉 Transforme Suas Aulas em um<br />
            <span className="text-yellow-300">Show de Aprendizado</span><br />
            com o Passa ou Repassa!
          </h1>
          <p className="text-blue-100 text-base md:text-xl mb-6 max-w-xl mx-auto leading-relaxed">
            Atividade pronta para imprimir e aplicar com seus alunos do <strong className="text-white">4º e 5º ano</strong>. Mais participação, diversão e aprendizado em minutos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-8 rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-md bg-white/10 border-4 border-yellow-300/60"
        >
          <div className="w-full h-64 md:h-80 bg-gradient-to-br from-yellow-400 via-orange-400 to-blue-500 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-8xl mb-4 animate-bounce-slow">🎮</div>
              <p className="text-white font-extrabold text-xl">PASSA OU REPASSA</p>
              <p className="text-white/80 text-sm mt-1">4º e 5º ANO</p>
              <p className="text-white/70 text-xs mt-2 italic">Imagem principal do produto aqui</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="space-y-4"
        >
          <CTAButton />

          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {["✔ Arquivo Digital em PDF", "✔ Acesso Imediato", "✔ Material Pronto"].map((s, i) => (
              <span key={i} className="bg-white/20 text-white text-xs md:text-sm font-semibold px-3 py-2 rounded-full border border-white/30 backdrop-blur-sm">
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const { ref, isInView } = useScrollAnimation();
  const benefits = [
    { icon: <Zap className="w-6 h-6" />, title: "Aulas mais divertidas", desc: "Transforme qualquer aula em uma experiência inesquecível para os alunos." },
    { icon: <Users className="w-6 h-6" />, title: "Alunos participam mais", desc: "Engaje toda a turma com a dinâmica de competição saudável." },
    { icon: <CheckCircle2 className="w-6 h-6" />, title: "Fácil de aplicar", desc: "Instruções claras e simples. Qualquer professor consegue usar." },
    { icon: <Clock className="w-6 h-6" />, title: "Economiza tempo", desc: "Chega de horas planejando. Material 100% pronto para usar." },
    { icon: <Trophy className="w-6 h-6" />, title: "Aprendizado com gamificação", desc: "Conteúdo pedagógico embalado em competição — o melhor dos dois mundos." },
    { icon: <Printer className="w-6 h-6" />, title: "Imprime quantas vezes quiser", desc: "Use e reutilize com todas as suas turmas ao longo do ano." },
  ];

  return (
    <section className="py-16 px-4 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-blue-800 mb-3">
            Por que professores <span className="text-orange-500">amam</span> esse material?
          </h2>
          <div className="w-20 h-1.5 bg-yellow-400 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                {b.icon}
              </div>
              <h3 className="font-extrabold text-blue-900 text-base mb-2">{b.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const { ref, isInView } = useScrollAnimation();
  const steps = [
    { num: "1", emoji: "📥", title: "Baixe o arquivo", desc: "Após a compra, você recebe acesso imediato ao PDF." },
    { num: "2", emoji: "🖨️", title: "Imprima as folhas", desc: "Basta imprimir em casa, na escola ou em qualquer gráfica." },
    { num: "3", emoji: "👥", title: "Divida a turma em equipes", desc: "Separe os alunos em dois times para começar a competição." },
    { num: "4", emoji: "🎯", title: "Comece o desafio", desc: "Leia as perguntas e acompanhe a pontuação pelo placar." },
    { num: "5", emoji: "🏆", title: "Veja seus alunos aprendendo", desc: "Assista ao engajamento acontecer em tempo real!" },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 to-orange-50" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-orange-700 mb-3">
            Como usar em <span className="text-blue-700">sala de aula</span>
          </h2>
          <div className="w-20 h-1.5 bg-orange-400 rounded-full mx-auto" />
        </motion.div>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex items-center gap-5 bg-white rounded-2xl p-5 shadow-md border-l-4 border-orange-400 hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center shadow-md">
                <span className="text-2xl">{step.emoji}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-blue-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">{step.num}</span>
                  <h3 className="font-extrabold text-blue-900 text-base">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <CTAButton size="sm" />
        </motion.div>
      </div>
    </section>
  );
}

function WhatsIncludedSection() {
  const { ref, isInView } = useScrollAnimation();
  const items = [
    { emoji: "📋", title: "Painel do Passa ou Repassa", desc: "Tabuleiro impresso e organizado para a dinâmica." },
    { emoji: "❓", title: "Perguntas prontas", desc: "Questões alinhadas ao currículo do 4º e 5º ano." },
    { emoji: "📊", title: "Placar oficial", desc: "Para registrar a pontuação de cada equipe." },
    { emoji: "📜", title: "Regras do jogo", desc: "Instruções claras para aplicar sem complicação." },
    { emoji: "📄", title: "Arquivo em PDF", desc: "Formato universal, funciona em qualquer impressora." },
    { emoji: "♻️", title: "Material reutilizável", desc: "Use com diferentes turmas durante todo o ano letivo." },
  ];

  return (
    <section className="py-16 px-4 bg-blue-700" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
            Você Recebe <span className="text-yellow-300">Tudo Isso:</span>
          </h2>
          <div className="w-20 h-1.5 bg-yellow-400 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-white/10 backdrop-blur rounded-2xl p-5 flex items-start gap-4 border border-white/20 hover:bg-white/20 transition-colors"
            >
              <span className="text-3xl flex-shrink-0 mt-0.5">{item.emoji}</span>
              <div>
                <h3 className="text-white font-extrabold text-base">{item.title}</h3>
                <p className="text-blue-200 text-sm mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl max-w-2xl mx-auto mb-10">
          <div className="bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-300 h-64 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="text-6xl mb-4">📦</div>
              <p className="text-blue-900 font-extrabold text-lg">Galeria de imagens do produto</p>
              <p className="text-blue-800/70 text-sm mt-1">Aqui ficarão as imagens que você enviar</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <CTAButton />
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { ref, isInView } = useScrollAnimation();
  const testimonials = [
    {
      stars: 5,
      text: "Meus alunos amaram! A aula virou uma diversão incrível e eles pediram para repetir na semana seguinte. Nunca vi tanta participação!",
      name: "Ana Paula",
      role: "Professora do 5º Ano",
      initial: "A",
      color: "from-blue-500 to-blue-600",
    },
    {
      stars: 5,
      text: "Economizei muito tempo de planejamento. O material já vem pronto e os alunos adoram. Vale cada centavo — recomendo para todos os colegas!",
      name: "Carla Mendes",
      role: "Pedagoga e Tutora",
      initial: "C",
      color: "from-green-500 to-emerald-600",
    },
    {
      stars: 5,
      text: "Material incrível, bem organizado e pronto para usar. Apliquei no reforço escolar e o resultado foi sensacional. Vou comprar os outros também!",
      name: "Marcos Oliveira",
      role: "Professor de Reforço Escolar",
      initial: "M",
      color: "from-orange-500 to-amber-600",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-blue-800 mb-3">
            O que estão <span className="text-green-500">dizendo</span>
          </h2>
          <div className="w-20 h-1.5 bg-green-400 rounded-full mx-auto mb-4" />
          <p className="text-gray-500 text-sm">Quem já usou aprova!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-md border border-blue-100 hover:shadow-xl transition-shadow relative"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed italic mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-extrabold text-lg`}>
                  {t.initial}
                </div>
                <div>
                  <p className="font-extrabold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-orange-500 to-red-500" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block badge-urgency text-white font-extrabold text-sm px-5 py-2 rounded-full mb-6 uppercase tracking-widest">
            🔥 Oferta Especial de Hoje
          </div>

          <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border-2 border-white/30 mb-6">
            <p className="text-white/80 text-lg mb-2">De <span className="line-through font-bold">R$ 37,90</span> por apenas:</p>

            <div className="mb-4">
              <span className="text-white/70 text-2xl font-bold">R$</span>
              <span className="text-7xl md:text-9xl font-extrabold text-white leading-none"> 9</span>
              <span className="text-4xl font-extrabold text-white">,90</span>
            </div>

            <div className="inline-block bg-green-400 text-green-900 font-extrabold text-sm px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              ✅ PROMOÇÃO ATIVA
            </div>

            <CountdownTimer />
          </div>

          <div className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur text-white font-bold text-sm px-5 py-3 rounded-full mb-6 border border-white/30">
            <AlertTriangle className="w-4 h-4 text-yellow-300" />
            <span>⚠ Promoção por tempo limitado — pode encerrar a qualquer momento</span>
          </div>

          <CTAButton label="👉 QUERO GARANTIR MEU ACESSO POR R$ 9,90" />

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-white/80 text-sm">
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-green-300" /> Compra 100% Segura</span>
            <span className="flex items-center gap-1.5"><Download className="w-4 h-4 text-blue-300" /> Acesso Imediato</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-yellow-300" /> Suporte Garantido</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GuaranteeSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-16 px-4 bg-white" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200 text-center shadow-lg"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-green-800 mb-4">
            🛡 Compra Segura e Garantida
          </h2>
          <p className="text-gray-700 text-base leading-relaxed max-w-lg mx-auto mb-6">
            Você recebe acesso imediato ao material após a confirmação do pagamento. Se tiver qualquer problema no acesso ao arquivo, nossa equipe de suporte está pronta para te ajudar sem enrolação.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-green-800 font-semibold">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-600" />Pagamento seguro</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-600" />Suporte real</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-600" />Download garantido</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  const { ref, isInView } = useScrollAnimation();
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Como recebo o material após a compra?",
      a: "Assim que seu pagamento for confirmado, você recebe um link por e-mail para baixar o arquivo em PDF. O acesso é imediato — em menos de 5 minutos você já terá o material em mãos!",
    },
    {
      q: "O material é físico ou digital?",
      a: "É 100% digital, em formato PDF. Você faz o download, imprime em casa ou na escola e está pronto para usar. Nada de esperar pelo Correios!",
    },
    {
      q: "Posso imprimir quantas vezes quiser?",
      a: "Sim! Após a compra, o arquivo é seu para sempre. Você pode imprimir para quantas turmas quiser, durante todo o ano letivo, sem nenhum custo adicional.",
    },
    {
      q: "Serve para reforço escolar fora da escola?",
      a: "Com certeza! O material funciona perfeitamente para aulas particulares, reforço escolar, cursinhos, escolas, e até em casa com os filhos. É versátil e fácil de adaptar.",
    },
    {
      q: "O pagamento é seguro?",
      a: "Totalmente! Utilizamos plataformas de pagamento criptografadas e reconhecidas no mercado. Seus dados financeiros estão completamente protegidos.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-blue-800 mb-3">
            Dúvidas Frequentes
          </h2>
          <div className="w-20 h-1.5 bg-blue-400 rounded-full mx-auto" />
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-blue-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-bold text-blue-900 text-sm md:text-base pr-4">{faq.q}</span>
                {open === i
                  ? <ChevronUp className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  : <ChevronDown className="w-5 h-5 text-blue-500 flex-shrink-0" />
                }
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-blue-100 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <CTAButton size="sm" />
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-16 px-4 hero-gradient" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-5xl mb-4 animate-bounce-slow">🚀</div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Suas aulas jamais serão<br /><span className="text-yellow-300">as mesmas!</span>
          </h2>
          <p className="text-blue-100 text-base md:text-lg mb-8 max-w-md mx-auto">
            Junte-se a centenas de professores que já transformaram suas salas de aula com o Passa ou Repassa!
          </p>
          <CTAButton label="👉 GARANTIR ACESSO AGORA POR R$ 9,90" />
          <p className="text-blue-200/80 text-xs mt-4">🔒 Compra segura · 📥 Acesso imediato · 🖨️ Pronto para imprimir</p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <a
          href="https://www.instagram.com/educacaokids_ofc?igsh=ZzZnNW91eHhqenZ6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white hover:text-pink-400 transition-colors font-semibold text-base mb-4"
        >
          <Instagram className="w-5 h-5" />
          @educacaokids_ofc
        </a>
        <div className="border-t border-gray-800 mt-4 pt-4">
          <p className="text-gray-600 text-sm">
            Todos os direitos reservados © Educação Kids
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <WhatsIncludedSection />
      <TestimonialsSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
