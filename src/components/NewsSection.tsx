import React from "react";
import Icon from "@/components/ui/icon";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Зимнее обновление 2024",
      excerpt: "Новые биомы, оружие и система выживания в холоде",
      date: "15 декабря 2024",
      category: "Обновление",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "Турнир серверов",
      excerpt: "Примите участие в глобальном PvP турнире с призовым фондом",
      date: "12 декабря 2024",
      category: "События",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "Оптимизация производительности",
      excerpt: "Улучшена стабильность и производительность на 30%",
      date: "10 декабря 2024",
      category: "Патч",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
    },
  ];

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 text-orange-400 text-sm font-medium mb-4">
            <Icon name="Newspaper" size={16} />
            <span>Последние новости</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white font-oswald mb-4">
            ОБНОВЛЕНИЯ И СОБЫТИЯ
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Следите за последними обновлениями игры, событиями сообщества и
            патчами
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center text-sm text-gray-400 space-x-2">
                  <Icon name="Calendar" size={14} />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">{item.excerpt}</p>

                <button className="flex items-center space-x-2 text-orange-500 hover:text-orange-400 font-medium transition-colors duration-300">
                  <span>Читать далее</span>
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="border border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
            Все новости
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
