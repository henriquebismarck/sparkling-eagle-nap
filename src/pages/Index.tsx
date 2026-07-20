"use client";

import React from "react";
import { SEO } from "@/components/SEO";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import TableOfContents from "@/components/landing/TableOfContents";
import SocialProof from "@/components/landing/SocialProof";
import Pricing from "@/components/landing/Pricing";
import Footer from "@/components/landing/Footer";

const Index = () => {
  const handleBuyNow = () => {
    // Navigate to the payment link
    window.location.href = "https://pay.kiwify.com.br/hM8XPfb";
  };

  const handleGetContent = () => {
    // Scroll to content section
    document.getElementById('conteudo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEO
        title="A Direita – História, Princípios e Evolução do Conservadorismo | eBook Educativo"
        description="Descubra a história e os princípios do pensamento conservador de forma clara e organizada. eBook digital com 7 capítulos, bônus exclusivos e acesso imediato. Ideal para estudantes, professores e pesquisadores."
        image="https://adireita.com.br/og-image.jpg"
        url="https://adireita.com.br/"
        type="website"
      />
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        {/* Header Navigation */}
        <Header />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero onBuyNow={handleBuyNow} onGetContent={handleGetContent} />

          {/* Features (Audience, Benefits, Differentiators) */}
          <Features />

          {/* Chapters Structure */}
          <TableOfContents />

          {/* Social Proof (Testimonials, Roadmap, Bonuses) */}
          <SocialProof />

          {/* Special Offer / FAQ / CTA Final */}
          <Pricing onBuyNow={handleBuyNow} />
        </main>

        {/* Footer Brand Info & Disclaimers */}
        <Footer />
      </div>
    </>
  );
};

export default Index;