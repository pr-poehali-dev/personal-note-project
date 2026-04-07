import { useState } from 'react';
import Icon from '@/components/ui/icon';

type Page = 'home' | 'notebook' | 'blog';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as Page, label: 'Главная', icon: 'Sparkles' },
    { id: 'notebook' as Page, label: 'Блокнот', icon: 'NotebookPen' },
    { id: 'blog' as Page, label: 'Блог', icon: 'BookOpen' },
  ];

  return (
    <div className="min-h-screen bg-background font-golos">
      {/* Декоративные элементы фона */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full bg-lime opacity-[0.03] blur-[120px]" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] rounded-full bg-coral opacity-[0.04] blur-[100px]" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-electric opacity-[0.03] blur-[80px]" />
      </div>

      {/* Навигация */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Логотип */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-lime rounded-sm flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-300">
              <span className="text-background text-sm font-black rotate-[-12deg] group-hover:rotate-0 transition-transform duration-300">М</span>
            </div>
            <span className="font-cormorant text-xl font-semibold tracking-wide">Моё пространство</span>
          </button>

          {/* Десктоп меню */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === item.id
                    ? 'bg-lime/10 text-lime border border-lime/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                <Icon name={item.icon} size={15} />
                {item.label}
              </button>
            ))}
          </div>

          {/* Мобильное меню */}
          <button
            className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>

        {/* Мобильное меню дропдаун */}
        {menuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl px-6 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  currentPage === item.id
                    ? 'bg-lime/10 text-lime'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                <Icon name={item.icon} size={16} />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Контент */}
      <main className="pt-16 relative z-10">
        {children}
      </main>
    </div>
  );
}
