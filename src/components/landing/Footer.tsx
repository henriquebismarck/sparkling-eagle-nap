"use client";

import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">A Direita</h3>
            <p className="text-sm text-muted-foreground">
              Um guia essencial para compreender a história e os princípios do pensamento conservador.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Produtos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">eBook</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Bônus</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Suporte</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contato</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Aviso Legal</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          <p>
            © 2024 A Direita. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-xs leading-relaxed">
            Esta página participa de programas de afiliados. Caso você realize uma compra por meio dos links apresentados, poderemos receber uma comissão, sem custo adicional para você.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;