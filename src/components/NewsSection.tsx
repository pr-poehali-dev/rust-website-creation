import React from "react";
import Icon from "@/components/ui/icon";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Новая радиоактивная зона",
      excerpt: "Обнаружен источник мутаций в заброшенном городе",
      date: "15 декабря 2024",
      category: "Угроза",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "Набор в экспедицию",
      excerpt: "Требуются выжившие для исследования подземного бункера",
      date: "12 декабря 2024",
      category: "Миссия",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "Найдены припасы",
      excerpt: "Крупный склад медикаментов обнаружен в секторе 12",
      date: "10 декабря 2024",
      category: "Ресурсы",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Угроза":
        return "bg-rust-700 text-rust-100";
      case "Миссия":
        return "bg-radiation-700 text-radiation-100";
      case "Ресурсы":
        return "bg-wasteland-700 text-wasteland-100";
      default:
        return "bg-wasteland-700 text-wasteland-100";
    }
  };

  return (
    <section className="bg-wasteland-900 py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-radiation-900/20 border border-radiation-700/30 rounded px-4 py-2 text-radiation-400 text-sm font-medium mb-4">
            <Icon name="Radio" size={16} />
            <span>Сводки выживания</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-rust-100 font-oswald mb-4">
            ПОСЛЕДНИЕ СВОДКИ
          </h2>
          <p className="text-xl text-rust-400 max-w-2xl mx-auto">
            Важная информация о состоянии пустоши, новых угрозах и возможностях
            для выживания
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="group bg-wasteland-800/50 rounded-xl overflow-hidden border border-wasteland-700 hover:border-rust-600/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 sepia contrast-125 brightness-75"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded text-sm font-medium ${getCategoryColor(item.category)}`}
                  >
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center text-sm text-rust-400 space-x-2">
                  <Icon name="Calendar" size={14} />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl font-bold text-rust-100 group-hover:text-radiation-400 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-rust-300 leading-relaxed">{item.excerpt}</p>

                <button className="flex items-center space-x-2 text-radiation-400 hover:text-radiation-300 font-medium transition-colors duration-300">
                  <span>Подробнее</span>
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="border border-rust-600 hover:bg-rust-700 text-rust-300 hover:text-rust-100 px-8 py-3 rounded font-medium transition-all duration-300">
            Все сводки
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
