import React, { useState, useEffect } from 'react';

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [secaoAtiva, setSecaoAtiva] = useState<string>('');

  const links = [
    { nome: 'Sobre', href: '#sobre', id: 'sobre' },
    { nome: 'Serviços', href: '#servicos', id: 'servicos' },
    { nome: 'Portfólio', href: '#portfolio', id: 'portfolio' },
    { nome: 'Equipe', href: '#equipe', id: 'equipe' },
    { nome: 'Parcerias', href: '#parcerias', id: 'parcerias' },
    { nome: 'Contato', href: '#orcamento', id: 'orcamento' },
  ];

  useEffect(() => {
    const secoesIds = ['sobre', 'servicos', 'portfolio', 'equipe', 'parcerias', 'orcamento'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSecaoAtiva(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    secoesIds.forEach((id) => {
      const elemento = document.getElementById(id);
      if (elemento) {
        observer.observe(elemento);
      }
    });

    return () => {
      secoesIds.forEach((id) => {
        const elemento = document.getElementById(id);
        if (elemento) {
          observer.unobserve(elemento);
        }
      });
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-tear-white/95 backdrop-blur-md border-b border-tear-black/10 py-2.5 px-4 md:py-4 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Boy tem que adicionar a logo aqui no formato svg */}
        <a href="#" className="text-lg md:text-xl font-bold text-tear-black tracking-tight flex items-center gap-1.5">
          TearWeb
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link, index) => {
            const ehAtivo = secaoAtiva === link.id;
            return (
              <a
                key={index}
                href={link.href}
                className={`text-sm py-1 transition-all border-b-2 ${
                  ehAtivo
                    ? 'text-tear-blue border-tear-orange font-semibold'
                    : 'text-tear-black hover:text-tear-blue border-transparent font-medium'
                }`}
              >
                {link.nome}
              </a>
            );
          })}
          <a
            href="#orcamento"
            className="bg-tear-orange text-tear-white text-xs font-semibold px-4 py-2 rounded-lg hover:scale-105 transition-all shadow-sm"
          >
            Orçamento
          </a>
        </nav>

        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden text-tear-black p-1 focus:outline-none"
          aria-label="Abrir menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuAberto ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuAberto && (
        <nav className="md:hidden pt-2 pb-2 border-t border-tear-black/10 mt-2 flex flex-col gap-2">
          {links.map((link, index) => {
            const ehAtivo = secaoAtiva === link.id;
            return (
              <a
                key={index}
                href={link.href}
                onClick={() => setMenuAberto(false)}
                className={`text-sm py-1 transition-colors ${
                  ehAtivo
                    ? 'text-tear-blue font-semibold border-l-2 border-tear-orange pl-2'
                    : 'text-tear-black hover:text-tear-blue font-medium'
                }`}
              >
                {link.nome}
              </a>
            );
          })}
          <a
            href="#orcamento"
            onClick={() => setMenuAberto(false)}
            className="inline-block text-center bg-tear-orange text-tear-white text-xs font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity mt-1"
          >
            Orçamento
          </a>
        </nav>
      )}
    </header>
  );
}
