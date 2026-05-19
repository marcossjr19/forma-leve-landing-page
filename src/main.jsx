import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Check,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Sparkles,
  Star,
  Timer
} from "lucide-react";
import "./styles.css";

const benefits = [
  {
    icon: Leaf,
    title: "Rotina mais saudável",
    text: "Pequenas mudanças diárias para ajudar você a criar consistência sem radicalismos."
  },
  {
    icon: Timer,
    title: "Mais energia no dia a dia",
    text: "Hábitos pensados para melhorar disposição, produtividade e bem-estar de forma gradual."
  },
  {
    icon: HeartPulse,
    title: "Método leve e acessível",
    text: "Uma proposta simples, prática e fácil de adaptar à rotina de qualquer pessoa."
  },
  {
    icon: ShieldCheck,
    title: "Plano de 30 dias",
    text: "Um acompanhamento estruturado para manter foco, organização e evolução contínua."
  }
];

const testimonials = [
  {
    name: "Marina A.",
    role: "NProfessora",
    text: "Gostei porque a proposta parece mais focada em consistência do que em promessas milagrosas."
  },
  {
    name: "Rafael M.",
    role: "Designer",
    text: "Em poucas semanas já senti mais disposição e consegui acompanhar meu progresso com mais clareza."
  },
  {
    name: "Bianca S.",
    role: "Analista Financeiro",
    text: "Finalmente encontrei uma abordagem que parece leve, prática e fácil de manter no dia a dia."
  }
];

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -left-5 top-8 h-24 w-24 rounded-full bg-coral/20 blur-2xl" />
      <div className="absolute -right-4 bottom-10 h-28 w-28 rounded-full bg-emerald-300/30 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-5 shadow-soft">
        <div className="flex items-center justify-between rounded-3xl bg-forest p-5 text-white">
          <div>
            <p className="text-sm font-medium text-mint">Transforme sua rotina de forma leve e consistente</p>
            <p className="mt-1 text-2xl font-black tracking-tight">Plano inicial de 30 dias</p>
          </div>
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-mint text-forest">
            <Sparkles size={30} strokeWidth={2.4} />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {["Energia", "Habito", "Foco"].map((item) => (
            <div key={item} className="rounded-2xl bg-mint/70 p-3 text-center text-xs font-bold text-forest">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-3xl bg-stone-50 p-4">
          <div className="mb-3 flex items-center justify-between text-sm font-bold text-ink">
            <span>Progresso</span>
            <span>90%</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-stone-200">
            <div className="h-full w-[78%] rounded-full bg-coral" />
          </div>
        </div>
      </div>
    </div>
  );
}

function BeforeAfter() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-coral">Antes / Depois</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-forest sm:text-4xl">
            Uma comparacao ilustrativa, sem fotos reais e sem promessas.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {[
            ["Antes", "Rotina sem estrutura", "Baixa constancia", "Pouco planejamento"],
            ["Depois", "Habitos organizados", "Mais previsibilidade", "Acompanhamento visual"]
          ].map(([label, headline, pointA, pointB], index) => (
            <article key={label} className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black uppercase tracking-[0.18em] text-forest/60">{label}</span>
                <span className={`h-3 w-16 rounded-full ${index === 0 ? "bg-stone-300" : "bg-coral"}`} />
              </div>
              <div className="mt-8 flex h-52 items-end justify-center rounded-3xl bg-white p-6">
                <div
                  className={`relative rounded-t-full ${
                    index === 0 ? "h-32 w-24 bg-stone-300" : "h-40 w-20 bg-mint"
                  }`}
                  aria-hidden="true"
                >
                  <div
                    className={`absolute -top-12 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full ${
                      index === 0 ? "bg-stone-300" : "bg-mint"
                    }`}
                  />
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-black text-ink">{headline}</h3>
              <div className="mt-4 space-y-3 text-sm font-semibold text-ink/70">
                {[pointA, pointB].map((point) => (
                  <p key={point} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-coral" />
                    {point}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-[#f8fbf7] text-ink">
      <section className="overflow-hidden bg-mint/60">
        <div className="mx-auto grid min-h-[92vh] max-w-6xl items-center gap-12 px-5 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white px-4 py-2 text-sm font-bold text-forest shadow-sm">
              <Sparkles className="h-4 w-4 text-coral" />
              Método Forma Leve
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.96] tracking-tight text-forest sm:text-6xl lg:text-7xl">
              Forma Leve
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/75 sm:text-xl">
              Um método digital de 30 dias para ajudar você a construir hábitos saudáveis, melhorar sua rotina
              e acompanhar sua evolução com leveza
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contato"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-coral px-7 text-base font-black text-white shadow-lg shadow-coral/25 transition hover:-translate-y-0.5 hover:bg-[#f25d50]"
              >
                Quero saber mais
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#aviso"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-forest/20 px-7 text-base font-black text-forest transition hover:bg-white"
              >
                Ver aviso de teste
              </a>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-coral">Beneficios</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-forest sm:text-4xl">
              Uma abordagem simples para criar hábitos mais saudáveis.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-3xl border border-forest/10 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-mint text-forest">
                  <Icon size={24} strokeWidth={2.4} />
                </div>
                <h3 className="text-xl font-black text-forest">{title}</h3>
                <p className="mt-3 leading-7 text-ink/68">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfter />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-coral">Depoimentos</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-forest sm:text-4xl">
                Veja o que algumas pessoas relataram após iniciar a rotina Forma Leve.
              </h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-3xl border border-forest/10 bg-white p-6 shadow-sm">
                <div className="mb-5 flex gap-1 text-coral">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-lg font-semibold leading-8 text-ink/78">"{item.text}"</p>
                <div className="mt-6 border-t border-stone-200 pt-5">
                  <p className="font-black text-forest">{item.name}</p>
                  <p className="text-sm font-semibold text-ink/55">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-forest py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-mint">COMECE AGORA</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
              Pronto para começar uma rotina mais saudável?
            </h2>
          </div>
          <a
            href="mailto:teste@exemplo.local"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-coral px-7 text-base font-black text-white transition hover:-translate-y-0.5 hover:bg-[#f25d50]"
          >
            Começar Agora
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <section id="aviso" className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-5">
          <div className="rounded-3xl border border-coral/30 bg-coral/10 p-6 text-ink">
            <h2 className="text-xl font-black text-forest">Aviso importante</h2>
            <p className="mt-3 leading-7">
              Este site e apenas um teste local. Forma Leve não é um produto real, os benefícios são
              demonstrativos, os depoimentos são fictícios e nenhum resultado de emagrecimento é prometido.
              Para orientação de saúde, procure um profissional qualificado.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
