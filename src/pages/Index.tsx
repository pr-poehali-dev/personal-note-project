import { useState } from "react";

const menu = {
  alcohol: [
    { name: "Пиво", emoji: "🍺" },
    { name: "Вино", emoji: "🍷" },
    { name: "Водка", emoji: "🥃" },
  ],
  juices: [
    { name: "Яблочный сок", emoji: "🍎" },
    { name: "Апельсиновый сок", emoji: "🍊" },
    { name: "Мультифрукт", emoji: "🍹" },
    { name: "Сок лесные ягоды", emoji: "🫐" },
  ],
  soft: [
    { name: "Минералка", emoji: "💧" },
    { name: "Кока-Кола", emoji: "🥤" },
    { name: "Фанта", emoji: "🧡" },
    { name: "Фреш Бар", emoji: "🌿" },
    { name: "Милкис", emoji: "🍬" },
  ],
};

const rules = [
  { num: "01", icon: "💬", text: "Маты — можно. Мы тут все взрослые." },
  { num: "02", icon: "⚖️", text: "Конфликты и ссоры? Решай в ЛС или зови администратора." },
  { num: "03", icon: "🔞", text: "Намёки на 18+? Только 21+. Всё такое — в ЛС и подальше от людей." },
  { num: "04", icon: "🚫", text: "Оскорбление посетителей — кик без предупреждения." },
  { num: "05", icon: "👊", text: "Оскорбление персонала или администрации — кик." },
  { num: "06", icon: "🚪", text: "Не нравится? Мы тебя не держим. Дверь открыта." },
  { num: "07", icon: "🤜", text: "Драки запрещены. Хочешь подраться — выйди из пати." },
  { num: "08", icon: "🐾", text: "Животные — только в переноске. Без переноски — нельзя." },
  { num: "09", icon: "🚬", text: "Вейп и сигареты — только подальше от людей." },
];

type Tab = "menu" | "rules";

const Index = () => {
  const [tab, setTab] = useState<Tab>("menu");

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans">
      {/* Фоновые блики */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-5 py-10">
        {/* Шапка */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-3xl mb-4 shadow-lg shadow-amber-500/20">
            🌴
          </div>
          <h1 className="text-5xl font-black tracking-tight mb-1"
            style={{ fontFamily: "'Georgia', serif" }}>
            Сахара<span className="text-amber-400">-Пати</span>
          </h1>
          <p className="text-zinc-500 text-sm mt-2 tracking-widest uppercase">Ночной клуб</p>
        </div>

        {/* Табы */}
        <div className="flex bg-zinc-900 rounded-xl p-1 mb-8 border border-zinc-800">
          <button
            onClick={() => setTab("menu")}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              tab === "menu"
                ? "bg-amber-400 text-black shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            🍹 Меню
          </button>
          <button
            onClick={() => setTab("rules")}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              tab === "rules"
                ? "bg-amber-400 text-black shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            📋 Правила
          </button>
        </div>

        {/* Меню */}
        {tab === "menu" && (
          <div className="space-y-6 animate-fade-in">
            {/* Алкоголь */}
            <div className="bg-zinc-900/80 rounded-2xl border border-zinc-800 overflow-hidden">
              <div className="px-5 py-3 border-b border-zinc-800 flex items-center gap-2">
                <span className="text-lg">🍾</span>
                <span className="font-bold text-amber-400 tracking-wide uppercase text-xs">Алкоголь</span>
              </div>
              <div className="divide-y divide-zinc-800/60">
                {menu.alcohol.map((item) => (
                  <div key={item.name} className="flex items-center gap-3 px-5 py-3.5 hover:bg-zinc-800/50 transition-colors">
                    <span className="text-xl">{item.emoji}</span>
                    <span className="text-zinc-200 font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Соки */}
            <div className="bg-zinc-900/80 rounded-2xl border border-zinc-800 overflow-hidden">
              <div className="px-5 py-3 border-b border-zinc-800 flex items-center gap-2">
                <span className="text-lg">🧃</span>
                <span className="font-bold text-orange-400 tracking-wide uppercase text-xs">Соки</span>
              </div>
              <div className="divide-y divide-zinc-800/60">
                {menu.juices.map((item) => (
                  <div key={item.name} className="flex items-center gap-3 px-5 py-3.5 hover:bg-zinc-800/50 transition-colors">
                    <span className="text-xl">{item.emoji}</span>
                    <span className="text-zinc-200 font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Газировки */}
            <div className="bg-zinc-900/80 rounded-2xl border border-zinc-800 overflow-hidden">
              <div className="px-5 py-3 border-b border-zinc-800 flex items-center gap-2">
                <span className="text-lg">🥤</span>
                <span className="font-bold text-sky-400 tracking-wide uppercase text-xs">Газировки и вода</span>
              </div>
              <div className="divide-y divide-zinc-800/60">
                {menu.soft.map((item) => (
                  <div key={item.name} className="flex items-center gap-3 px-5 py-3.5 hover:bg-zinc-800/50 transition-colors">
                    <span className="text-xl">{item.emoji}</span>
                    <span className="text-zinc-200 font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Правила */}
        {tab === "rules" && (
          <div className="space-y-3 animate-fade-in">
            <p className="text-zinc-500 text-sm text-center mb-6">
              Соблюдай — и вечер будет огонь 🔥
            </p>
            {rules.map((rule) => (
              <div
                key={rule.num}
                className="flex gap-4 items-start bg-zinc-900/80 border border-zinc-800 rounded-xl px-5 py-4 hover:border-amber-500/20 hover:bg-zinc-800/50 transition-all"
              >
                <span className="text-amber-500/40 font-black text-xs mt-0.5 min-w-[24px]">{rule.num}</span>
                <span className="text-xl min-w-[28px]">{rule.icon}</span>
                <span className="text-zinc-300 text-sm leading-relaxed">{rule.text}</span>
              </div>
            ))}
            <div className="mt-6 p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 text-center">
              <span className="text-amber-400/80 text-sm">Нарушил правила — получи кик. Без обид 🤝</span>
            </div>
          </div>
        )}

        {/* Футер */}
        <div className="text-center mt-12 text-zinc-700 text-xs tracking-wide">
          Сахара-Пати · Добро пожаловать на вечеринку 🌴
        </div>
      </div>
    </div>
  );
};

export default Index;
