"use client";

import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const TableOfContents = () => {
  const chapters = [
    {
      title: "As origens do pensamento conservador",
      description: "Explore as raízes filosóficas e históricas que deu origem ao pensamento conservador, desde as tradições medievais até as primeiras obras modernas."
    },
    {
      title: "Grandes filósofos e intelectuais",
      description: "Conheça os pensadores fundamentais que moldaram o conservadorismo, de Edmund Burke a filósofos contemporâneos."
    },
    {
      title: "O desenvolvimento do conservadorismo moderno",
      description: "Acompanhe a evolução das ideias conservadoras no século XIX e XX, com foco nas transformações políticas e sociais."
    },
    {
      title: "A direita política em diferentes países",
      description: "Estudo comparativo da trajetória do conservadorismo em diferentes contextos históricos e culturais."
    },
    {
      title: "História política do Brasil",
      description: "Análise específica da evolução das ideias conservadoras no Brasil, do período colonial até os dias atuais."
    },
    {
      title: "Desafios contemporâneos",
      description: "Reflexões sobre como o pensamento conservador se adapta às realidades do mundo moderno e globalizado."
    },
    {
      title: "Reflexões para o futuro",
      description: "Considerações sobre o papel do conservadorismo na política contemporânea e suas possíveis trajetórias."
    },
  ];

  return (
    <section className="py-20 bg-muted" id="sumario">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sumário do Ebook</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Estrutura completa do conteúdo</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {chapters.map((chapter, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-left font-semibold py-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-primary font-bold">Capítulo {index + 1}</span>
                    <span>{chapter.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{chapter.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;