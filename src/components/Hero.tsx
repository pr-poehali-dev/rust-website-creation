import React from "react";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.3)_0%,transparent_50%)]"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 text-orange-400 text-sm font-medium">
                <Icon name="Zap" size={16} />
                <span>Выживание • Строительство • PvP</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white font-oswald leading-tight">
                ВЫЖИВИ В
                <span className="block bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  ЖЕСТОКОМ
                </span>
                МИРЕ
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Построй убежище, собери ресурсы и сражайся за выживание в
                безжалостном постапокалиптическом мире
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/25 hover:scale-105">
                <div className="flex items-center space-x-2">
                  <Icon name="Play" size={20} />
                  <span>Начать игру</span>
                </div>
              </button>

              <button className="border border-gray-600 hover:border-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-orange-500/10">
                <div className="flex items-center space-x-2">
                  <Icon name="Youtube" size={20} />
                  <span>Трейлер</span>
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">150K+</div>
                <div className="text-sm text-gray-400">Игроков онлайн</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">500+</div>
                <div className="text-sm text-gray-400">Активных серверов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">24/7</div>
                <div className="text-sm text-gray-400">Поддержка</div>
              </div>
            </div>
          </div>

          {/* Right Content - Game Screenshot */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-2xl p-8 backdrop-blur-sm border border-orange-500/20">
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop"
                  alt="Rust Gameplay"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">
                    Последнее обновление
                  </h3>
                  <p className="text-gray-300">
                    Добавлены новые оружие и система крафта. Улучшена графика и
                    оптимизация.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>Версия 2.4.1</span>
                    <span>•</span>
                    <span>15 декабря 2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
