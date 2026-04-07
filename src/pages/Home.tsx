type Page = 'home' | 'notebook' | 'blog';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const features = [
    {
      icon: '✦',
      color: 'lime',
      title: 'Блокнот',
      desc: 'Заметки с категориями и тегами. Всё систематизировано и под рукой.',
      page: 'notebook' as Page,
    },
    {
      icon: '◈',
      color: 'coral',
      title: 'Блог',
      desc: 'Публикуй статьи, организуй по темам, делись мыслями с миром.',
      page: 'blog' as Page,
    },
  ];

  const stats = [
    { value: '∞', label: 'Заметок', color: 'lime' },
    { value: '∅', label: 'Лимитов', color: 'coral' },
    { value: '✓', label: 'Порядок', color: 'electric' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 overflow-hidden">
        {/* Геометрический декор */}
        <div className="absolute top-8 right-0 w-[1px] h-64 bg-gradient-to-b from-transparent via-lime/40 to-transparent" />
        <div className="absolute top-32 right-16 w-3 h-3 border border-lime/60 rotate-45" />
        <div className="absolute top-48 right-8 w-1.5 h-1.5 bg-coral/80 rounded-full" />
        <div className="absolute top-12 left-1/2 w-px h-16 bg-gradient-to-b from-electric/40 to-transparent" />

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-lime/20 bg-lime/5 mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            <span className="text-lime text-xs font-medium tracking-widest uppercase">Твоё личное пространство</span>
          </div>

          <h1 className="font-cormorant text-6xl md:text-8xl font-semibold leading-[0.9] mb-8 animate-slide-up stagger-1">
            Мысли.<br />
            <em className="text-coral not-italic">Идеи.</em><br />
            Публикации.
          </h1>

          <p className="text-muted-foreground text-lg max-w-lg leading-relaxed mb-10 animate-slide-up stagger-2">
            Единое пространство для личных заметок и публикаций. Категории, теги и удобная навигация — всё что нужно для творческой работы.
          </p>

          <div className="flex flex-wrap gap-4 animate-slide-up stagger-3">
            <button
              onClick={() => onNavigate('notebook')}
              className="group flex items-center gap-3 px-6 py-3 bg-lime text-background rounded-xl font-semibold text-sm hover:bg-lime/90 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-lime/20"
            >
              Открыть блокнот
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button
              onClick={() => onNavigate('blog')}
              className="flex items-center gap-3 px-6 py-3 border border-border hover:border-coral/40 rounded-xl font-semibold text-sm transition-all duration-200 hover:bg-coral/5 hover:text-coral"
            >
              Читать блог
            </button>
          </div>
        </div>

        {/* Декоративный блок справа */}
        <div className="hidden lg:block absolute right-0 top-16 w-72 opacity-80">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-lime/5 to-electric/5 rounded-2xl border border-border/50" />
            <div className="relative p-6 space-y-4">
              <div className="h-2 w-3/4 bg-secondary rounded-full" />
              <div className="h-2 w-full bg-secondary rounded-full" />
              <div className="h-2 w-2/3 bg-secondary rounded-full" />
              <div className="flex gap-2 mt-4">
                <span className="px-2 py-0.5 text-[10px] rounded-full bg-lime/10 text-lime border border-lime/20">идеи</span>
                <span className="px-2 py-0.5 text-[10px] rounded-full bg-coral/10 text-coral border border-coral/20">планы</span>
                <span className="px-2 py-0.5 text-[10px] rounded-full bg-electric/10 text-electric border border-electric/20">черновик</span>
              </div>
              <div className="border-t border-border/30 pt-4">
                <div className="h-2 w-4/5 bg-secondary/60 rounded-full mb-2" />
                <div className="h-2 w-3/5 bg-secondary/40 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="border-y border-border/30 bg-surface/50">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className={`font-cormorant text-5xl font-semibold text-${s.color} mb-1`}>{s.value}</div>
              <div className="text-muted-foreground text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Разделы */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-cormorant text-4xl font-semibold">Разделы</h2>
          <div className="w-24 h-px bg-gradient-to-l from-border to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <button
              key={f.title}
              onClick={() => onNavigate(f.page)}
              className={`group relative text-left p-8 rounded-2xl border border-border/50 bg-surface hover:border-${f.color}/30 hover:bg-${f.color}/5 transition-all duration-300 animate-slide-up stagger-${i + 3}`}
            >
              <div className={`text-3xl mb-6 text-${f.color}`}>{f.icon}</div>
              <h3 className="font-cormorant text-3xl font-semibold mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{f.desc}</p>
              <div className={`mt-6 flex items-center gap-2 text-${f.color} text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity`}>
                Открыть <span>→</span>
              </div>
              <div className={`absolute top-6 right-6 w-2 h-2 rounded-full bg-${f.color}/40 group-hover:bg-${f.color} transition-colors`} />
            </button>
          ))}
        </div>
      </section>

      {/* Декоративный футер */}
      <footer className="border-t border-border/30 max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <span className="font-cormorant text-muted-foreground/50 text-sm italic">Моё пространство © 2026</span>
        <div className="flex gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-lime/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-coral/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-electric/40" />
        </div>
      </footer>
    </div>
  );
}
