import React from "react";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-wasteland-900 via-wasteland-950 to-rust-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(191,160,148,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.05)_0%,transparent_40%)]"></div>
      </div>

      {/* Distressed Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(191,160,148,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(191,160,148,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30"></div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-radiation-900/20 border border-radiation-700/30 rounded px-4 py-2 text-radiation-400 text-sm font-medium">
                <Icon name="RadioactiveIcon" fallback="Zap" size={16} />
                <span>Радиация • Мутации • Выживание</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-rust-100 font-oswald leading-tight">
                ВЫЖИВИ В
                <span className="block bg-gradient-to-r from-rust-500 to-rust-700 bg-clip-text text-transparent">
                  МЁРТВОМ
                </span>
                МИРЕ
              </h1>

              <p className="text-xl text-rust-300 leading-relaxed max-w-lg">
                Собирай ресурсы, строй убежище и борись за жизнь в радиоактивной
                пустоши, где каждый день может стать последним
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-rust-700 to-rust-900 hover:from-rust-600 hover:to-rust-800 text-rust-100 px-8 py-4 rounded border border-rust-600 font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-rust-700/25 hover:scale-105">
                <div className="flex items-center space-x-2">
                  <Icon name="Crosshair" size={20} />
                  <span>В пустошь</span>
                </div>
              </button>

              <button className="border border-wasteland-600 hover:border-radiation-500 text-rust-200 hover:text-radiation-400 px-8 py-4 rounded font-bold text-lg transition-all duration-300 hover:bg-radiation-900/10">
                <div className="flex items-center space-x-2">
                  <Icon name="Eye" size={20} />
                  <span>Посмотреть</span>
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-wasteland-800">
              <div className="text-center">
                <div className="text-2xl font-bold text-radiation-400">2K+</div>
                <div className="text-sm text-rust-400">Выживших</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-radiation-400">50+</div>
                <div className="text-sm text-rust-400">Убежищ</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-radiation-400">365</div>
                <div className="text-sm text-rust-400">Дней катастрофы</div>
              </div>
            </div>
          </div>

          {/* Right Content - Wasteland Screenshot */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-rust-800/20 to-wasteland-800/20 rounded-2xl p-8 backdrop-blur-sm border border-rust-700/30">
              <div className="bg-wasteland-900 rounded-xl overflow-hidden shadow-2xl border border-rust-800/50">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
                  alt="Постапокалиптический мир"
                  className="w-full h-80 object-cover sepia contrast-125"
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-rust-100">
                    Сводка выживания
                  </h3>
                  <p className="text-rust-300">
                    Уровень радиации: ВЫСОКИЙ. Обнаружены новые мутанты в
                    секторе 7. Запасы продовольствия критически низкие.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-rust-400">
                    <span>День 365</span>
                    <span>•</span>
                    <span>Статус: В ОПАСНОСТИ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-radiation-500 rounded-full animate-pulse border border-radiation-400"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-rust-600 rounded-full animate-pulse delay-1000 border border-rust-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
