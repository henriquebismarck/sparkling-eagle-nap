"use client";

import React from "react";
import { Book } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Book className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">A Direita</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a>
          <a href="#conteudo" className="hover:text-primary transition-colors">Conteúdo</a>
          <a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;