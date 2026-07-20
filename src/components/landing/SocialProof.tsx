"use client";

import React from "react";
import { Star, BookOpen, Clock, MapPin } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";

export const SocialProof = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Estudante de História",
      rating: 5,
      comment: "O conteúdo é extremamente claro e bem estruturado. Aprendi muito sobre a história do pensamento conservador de forma acessível."
    },
    {
      name: "Ana Sofia",
      role: "Professora de Ciência Política",
      rating: 5,
      comment: "Excelente material didático. A organização dos capítulos facilita o estudo e a compreensão dos conceitos."
    },
    {
      name: "Roberto Lima",
      role: "Pesquisador",
      rating: 5,
      comment: "Uma obra que equilibra rigor acadêmico com linguagem acessível. Muito útil para profissionais da área."
    },
    {
      name: "Mariana Costa",
      role: "Universitária",
      rating: 5,
      comment: "Ótimo para quem quer entender o contexto histórico das ideias políticas sem se perder em jargões excessivos."
    },
  ];

  return (
    <>
      {/* Depoimentos */}
      <section className="py-20 bg-background animate-fade-in" id="depoimentos">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Depoimentos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">O que nossos leitores dizem sobre o conteúdo</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-bold text-sm text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-muted" id="como-funciona">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Como Funciona</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">O processo simples de aquisição do eBook</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
              <div className="space-y-8">
                {[
                  { step: "1", title: "Faça sua compra", desc: "Clique no botão e complete a aquisição" },
                  { step: "2", title: "Receba acesso imediato", desc: "Link de download enviado por e-mail" },
                  { step: "3", title: "Baixe o eBook", desc: "Formato PDF pronto para download" },
                  { step: "4", title: "Leia no seu ritmo", desc: "Acesse em qualquer dispositivo" },
                  { step: "5", title: "Aplique o conhecimento", desc: "Use o material para seus estudos" },
                ].map((item, index) => (
                  <div key={index} className="relative pl-12 group">
                    <div className="absolute left-0 top-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold transition-transform group-hover:scale-110 duration-200">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-20 bg-background" id="bonus">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Bônus Exclusivos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Conteúdo adicional para sua experiência completa</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg font-bold">Glossário de termos políticos</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">Definições claras de conceitos fundamentais</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg font-bold">Linha do tempo histórica</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">Cronologia dos principais eventos</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg font-bold">Mapa das correntes políticas</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">Visualização das diferentes vertentes</p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialProof;