"use client";

import React from "react";
import { Book, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroProps {
  onBuyNow: () => void;
  onGetContent: () => void;
}

export const Hero = ({ onBuyNow, onGetContent }: HeroProps) => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544941149-6e6b4e25c6c9?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4">
            <Book className="h-4 w-4 mr-2" /> eBook Digital
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-primary">Entenda a História e os Princípios</span> do Conservadorismo de Forma Clara e Organizada
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Descubra como surgiram as principais ideias do pensamento conservador, sua evolução histórica e sua influência em diferentes países por meio de um conteúdo acessível e bem estruturado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="px-8 py-4 text-base font-semibold" onClick={onBuyNow}>
              QUERO MEU EBOOK AGORA
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-base font-semibold" onClick={onGetContent}>
              VER O CONTEÚDO
            </Button>
          </div>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Download Imediato</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Leitura em Qualquer Dispositivo</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Conteúdo Atualizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;