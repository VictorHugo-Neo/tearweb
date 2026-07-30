import React from 'react';

export default function Planos() {
  const planos = [
    {
      nome: 'Hospedagem e Manutenção',
      preco: 'R$ 60',
      periodo: '/mês',
      descricao: 'Para manter sua página no ar com segurança e atualizações mensais de conteúdo.',
      destaque: false,
      itens: [
        'Hospedagem inclusa',
        'Atualização de textos e fotos',
        'Suporte direto via WhatsApp',
        'Monitoramento de funcionamento',
      ],
      link: '#orcamento',
      textoBotao: 'Contratar Plano',
    },
    {
      nome: 'Site para Vendas',
      preco: 'R$ 350',
      periodo: ' taxa única',
      descricao: 'Criação de página comercial para apresentar produtos, serviços e atrair novos clientes.',
      destaque: true,
      itens: [
        'Página rápida para celular',
        'Botão direto para WhatsApp',
        'Localização e mapa do negócio',
        'Sem mensalidade obrigatória',
      ],
      link: '#orcamento',
      textoBotao: 'Solicitar Site',
    },
    {
      nome: 'Sistema Sob Medida',
      preco: 'Sob Consulta',
      periodo: '',
      descricao: 'Desenvolvimento de programas para automatizar tarefas e organizar dados da sua empresa.',
      destaque: false,
      itens: [
        'Automação de rotinas internas',
        'Cadastro de clientes e vendas',
        'Relatórios e planilhas simples',
        'Ajustado à sua necessidade',
      ],
      link: '#orcamento',
      textoBotao: 'Pedir Orçamento',
    },
  ];

  return (
    <section id="planos" className="bg-tear-white text-tear-black py-8 px-4 md:py-20 md:px-16 lg:px-24 border-t border-tear-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-tear-black mb-2 md:mb-3">
            Planos de Investimento
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-tear-black/70 max-w-xl leading-relaxed">
            Valores transparentes e acessíveis para iniciar ou melhorar a presença digital do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-stretch">
          {planos.map((plano, index) => (
            <div
              key={index}
              className={`relative bg-tear-white rounded-xl p-4 sm:p-6 md:p-8 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                plano.destaque
                  ? 'border-2 border-tear-orange shadow-md'
                  : 'border border-tear-black/15 hover:border-tear-blue'
              }`}
            >
              {plano.destaque && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-tear-orange text-tear-white text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                  Mais Procurado
                </span>
              )}

              <div>
                <h3 className="text-base md:text-xl font-bold text-tear-black mb-1 md:mb-2">
                  {plano.nome}
                </h3>
                <p className="text-xs sm:text-sm text-tear-black/70 leading-relaxed mb-4 md:mb-6">
                  {plano.descricao}
                </p>

                <div className="flex items-baseline gap-1 mb-4 md:mb-6 pb-4 border-b border-tear-black/10">
                  <span className="text-2xl md:text-4xl font-bold text-tear-black">
                    {plano.preco}
                  </span>
                  {plano.periodo && (
                    <span className="text-xs md:text-sm text-tear-black/60 font-medium">
                      {plano.periodo}
                    </span>
                  )}
                </div>

                <ul className="space-y-2 md:space-y-3 mb-6">
                  {plano.itens.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-xs md:text-sm text-tear-black/80 flex items-center gap-2">
                      <svg className="w-4 h-4 text-tear-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={plano.link}
                className="w-full inline-flex items-center justify-center bg-tear-orange text-tear-white font-medium text-xs md:text-base px-4 py-2.5 md:px-6 md:py-3.5 rounded-lg md:rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                {plano.textoBotao}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
