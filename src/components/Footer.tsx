import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-wasteland-950 border-t border-wasteland-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-rust-700 to-rust-900 rounded border border-rust-600 flex items-center justify-center">
                <Icon name="Skull" size={20} className="text-rust-200" />
              </div>
              <h3 className="text-xl font-bold text-rust-100 font-oswald">
                WASTELAND
              </h3>
            </div>
            <p className="text-rust-400 leading-relaxed">
              Выживайте, исследуйте и боритесь за жизнь в мире после катастрофы
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-rust-400 hover:text-radiation-400 transition-colors duration-300"
              >
                <Icon name="Radio" size={20} />
              </a>
              <a
                href="#"
                className="text-rust-400 hover:text-radiation-400 transition-colors duration-300"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="text-rust-400 hover:text-radiation-400 transition-colors duration-300"
              >
                <Icon name="Users" size={20} />
              </a>
            </div>
          </div>

          {/* Survival */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-rust-100">Выживание</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-rust-400 hover:text-radiation-400 transition-colors duration-300"
                >
                  Руководство
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-rust-400 hover:text-radiation-400 transition-colors duration-300"
                >
                  Карта пустоши
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-rust-400 hover:text-radiation-400 transition-colors duration-300"
                >
                  Крафт предметов
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-rust-400 hover:text-radiation-400 transition-colors duration-300"
                >
                  Убежища
                </a>
              </li>
            </ul>
          </div>

          {/* Factions */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-rust-100">Фракции</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-rust-400 hover:text-radiation-400 transition-colors duration-300"
                >
                  Стражи
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-rust-400 hover:text-radiation-400 transition-colors duration-300"
                >
                  Мародёры
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-rust-400 hover:text-radiation-400 transition-colors duration-300"
                >
                  Учёные
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-rust-400 hover:text-radiation-400 transition-colors duration-300"
                >
                  Торговцы
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-rust-100">Связь</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-rust-400 hover:text-radiation-400 transition-colors duration-300"
                >
                  Радиосвязь
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-rust-400 hover:text-radiation-400 transition-colors duration-300"
                >
                  SOS сигнал
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-rust-400 hover:text-radiation-400 transition-colors duration-300"
                >
                  Торговый пост
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-rust-400 hover:text-radiation-400 transition-colors duration-300"
                >
                  Кодекс выживания
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-wasteland-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-rust-400 text-sm">
            © 2024 Wasteland Survival. День 365 после катастрофы.
          </p>
          <div className="flex items-center space-x-6 text-sm text-rust-400">
            <a
              href="#"
              className="hover:text-radiation-400 transition-colors duration-300"
            >
              Кодекс выживания
            </a>
            <a
              href="#"
              className="hover:text-radiation-400 transition-colors duration-300"
            >
              Правила безопасности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
