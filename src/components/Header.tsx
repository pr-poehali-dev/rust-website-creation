import React from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-wasteland-950/95 backdrop-blur-sm border-b border-rust-800/30 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-rust-700 to-rust-900 rounded border border-rust-600 flex items-center justify-center shadow-lg">
              <Icon name="Skull" size={24} className="text-rust-200" />
            </div>
            <h1 className="text-2xl font-bold text-rust-100 font-oswald tracking-wider">
              WASTELAND
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-rust-300 hover:text-radiation-400 transition-colors duration-300 font-medium"
            >
              Выживание
            </a>
            <a
              href="#"
              className="text-rust-300 hover:text-radiation-400 transition-colors duration-300 font-medium"
            >
              Убежища
            </a>
            <a
              href="#"
              className="text-rust-300 hover:text-radiation-400 transition-colors duration-300 font-medium"
            >
              Фракции
            </a>
          </nav>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-rust-700 to-rust-900 hover:from-rust-600 hover:to-rust-800 text-rust-100 px-6 py-2 rounded border border-rust-600 font-medium transition-all duration-300 shadow-lg hover:shadow-rust-700/25">
            Выжить
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden text-rust-200">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
