import React from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-orange-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <Icon name="Flame" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white font-oswald tracking-wider">
              RUST
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium"
            >
              Новости
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium"
            >
              Серверы
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium"
            >
              Сообщество
            </a>
          </nav>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-orange-500/25">
            Играть
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
