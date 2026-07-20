"use client";

import React from "react";
import { Users, Library, Book, Award, Globe, BookOpen, BarChart3, Smartphone, CheckCircle, LibraryIcon, FileText, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Features = () => {
  const benefits = [
    { icon: Book, text: "Compreenda a origem do conservadorismo" },
    { icon: LibraryIcon, text: "Conheça a evolução histórica da direita" },
    { icon: Globe, text: "Entenda diferentes experiências internacionais" },
    { icon: BookOpen, text: "Aprenda conceitos fundamentais" },
    { icon: BarChart3, text: "Desenvolva pensamento crítico" },
    { icon: FileText, text: "Conteúdo organizado em linguagem simples" },
    { icon: Target, text: "Leitura prática" },
    { icon: Smartphone, text: "Acesso imediato" },
  ];

  const whatYouWillLearn = [
    "Origem histórica do conservadorismo",
    "Principais pensadores",
    "Evolução da direita ao longo da história",
    "Liberalismo e conservadorismo",
    "Democracia representativa",
    "Economia de mercado",
    "Instituições políticas",
    "História política do Brasil",
    "História política mundial",
    "Correntes contemporâneas",
  ];

  const differentials = [
    { title: "Linguagem clara", desc: "Acessível e sem jargões excessivos" },
    { title: "Conteúdo organizado", desc: "Estrutura lógica e progressiva" },
    { title: "Base histórica", desc: "Fundamentado em fontes primárias" },
    { title: "Referências bibliográficas", desc: "Indicado para aprofundamento" },
    { title: "Leitura objetiva", desc: "Abordagem neutra e crítica" },
    { title: "Material digital", desc: "Acesso imediato após compra" },
  ];

  return (
    <>
      {/* Para Quem É Este Ebook */}
      <section className="py-20 bg-background animate-fade-in" id="sobre">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Para Quem É Este Ebook</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma ferramenta essencial para compreensão do pensamento conservador e da história política
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle className="text-xl font-bold">Estudantes</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">Para complementar estudos em história e ciência política</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <Library className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle className="text-xl font-bold">Universitários</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">Material de apoio para pesquisas e trabalhos acadêmicos</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <Book className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle className="text-xl font-bold">Professores</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">Didática complementar para disciplinas de humanidades</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle className="text-xl font-bold">Pesquisadores</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">Referência bibliográfica atualizada e fundamentada</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-muted" id="beneficios">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefícios</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Descubra o que você ganha ao estudar este material</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-3">
                  <benefit.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm font-medium">{benefit.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* O Que Você Vai Aprender */}
      <section className="py-20 bg-background" id="conteudo">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">O Que Você Vai Aprender</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Conceitos fundamentais e evolução histórica do pensamento conservador</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatYouWillLearn.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-200">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-background" id="diferenciais">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Diferenciais</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">O que torna este material único</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((diff, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="flex items-center space-x-3 text-lg font-bold">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <span>{diff.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground text-sm">{diff.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;