import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <Icon name="Flame" size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white font-oswald">RUST</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Выживайте, стройте и сражайтесь в самой жестокой среде выживания
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                <Icon name="Youtube" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                <Icon name="Users" size={20} />
              </a>
            </div>
          </div>

          {/* Game */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Игра</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Скачать
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Системные требования
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Гайды
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Моды
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Сообщество</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Форум
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Reddit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Турниры
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Поддержка</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Помощь
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Баг-репорты
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Контакты
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Политика
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2024 Rust Game. Все права защищены.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a
              href="#"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Пользовательское соглашение
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Конфиденциальность
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
