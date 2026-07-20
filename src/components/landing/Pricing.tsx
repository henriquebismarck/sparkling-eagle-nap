"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface PricingProps {
  onBuyNow: () => void;
}

export const Pricing = ({ onBuyNow }: PricingProps) => {
  const faqs = [
    {
      question: "O eBook é digital?",
      answer: "Sim, o eBook é entregue no formato digital PDF, que pode ser lido em qualquer dispositivo com ou sem internet após o download."
    },
    {
      question: "Como recebo?",
      answer: "Após a compra, você receberá um e-mail com o link de download do eBook imediatamente."
    },
    {
      question: "Posso ler no celular?",
      answer: "Sim! O formato PDF é compatível com smartphones, tablets e computadores. Você pode baixar o arquivo e ler offline."
    },
    {
      question: "Preciso de internet para ler?",
      answer: "Não, após baixar o arquivo você pode lê-lo offline. A internet é necessária apenas para o download inicial."
    },
    {
      question: "Há atualizações futuras?",
      answer: "Sim, caso haja atualizações ou novas edições, você receberá notificações por e-mail com os novos conteúdos."
    },
    {
      question: "Quanto tempo leva para receber?",
      answer: "O acesso ao eBook é imediato após a confirmação da compra. O e-mail com o link de download chega em poucos minutos."
    },
  ];

  return (
    <>
      {/* Oferta */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground" id="oferta">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Oferta Especial</h2>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center space-x-3 font-medium">
                  <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span>eBook completo</span>
                </li>
                <li className="flex items-center space-x-3 font-medium">
                  <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span>Download imediato</span>
                </li>
                <li className="flex items-center space-x-3 font-medium">
                  <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span>Formato PDF de alta qualidade</span>
                </li>
                <li className="flex items-center space-x-3 font-medium">
                  <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span>Compatível com celular, tablet e computador</span>
                </li>
                <li className="flex items-center space-x-3 font-medium">
                  <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span>Atualizações gratuitas inclusas</span>
                </li>
              </ul>
              <Button size="lg" variant="secondary" className="w-full px-12 py-4 text-xl font-bold rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200" onClick={onBuyNow}>
                COMPRAR AGORA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background" id="faq">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Tudo o que você precisa saber</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-muted">
                  <AccordionTrigger className="text-left font-medium py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-background" id="cta-final">
        <div className="container px-4 text-center mx-auto">
          <h2 className="text-3xl font-bold mb-6">Comece Hoje Mesmo a Expandir Seus Conhecimentos em História Política</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tenha acesso a um material organizado, com linguagem acessível e foco em contexto histórico, filosofia política e pensamento conservador.
          </p>
          <Button size="lg" className="px-8 py-4 text-base font-semibold" onClick={onBuyNow}>
            QUERO LER O EBOOK
          </Button>
        </div>
      </section>
    </>
  );
};

export default Pricing;