import React, { useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    projeto: '',
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nome && formData.email && formData.projeto) {
      setEnviado(true);
    }
  };

  return (
    <section id="orcamento" className="bg-tear-white text-tear-black py-8 px-4 md:py-20 md:px-16 lg:px-24 border-t border-tear-black/10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-tear-black mb-2 md:mb-3">
            Contato
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-tear-black/70 max-w-xl leading-relaxed">
            Envie as informações do seu projeto pelo formulário abaixo ou inicie um atendimento via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 lg:gap-10 items-stretch">
          <form onSubmit={handleSubmit} className="md:col-span-3 bg-tear-white border border-tear-black/15 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm space-y-3.5 md:space-y-5">
            {enviado && (
              <div className="bg-tear-teal/15 border border-tear-teal text-tear-teal px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-medium">
                Mensagem enviada. Entraremos em contato em breve.
              </div>
            )}

            <div>
              <label htmlFor="nome" className="block text-xs md:text-sm font-semibold text-tear-black mb-1 md:mb-2">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                value={formData.nome}
                onChange={handleChange}
                placeholder="Seu nome ou da sua empresa"
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl border border-tear-black/20 bg-tear-white text-tear-black text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-tear-teal focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs md:text-sm font-semibold text-tear-black mb-1 md:mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="seu.email@empresa.com"
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl border border-tear-black/20 bg-tear-white text-tear-black text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-tear-teal focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="projeto" className="block text-xs md:text-sm font-semibold text-tear-black mb-1 md:mb-2">
                Projeto
              </label>
              <textarea
                id="projeto"
                name="projeto"
                rows={3}
                required
                value={formData.projeto}
                onChange={handleChange}
                placeholder="Descreva brevemente a necessidade do sistema"
                className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl border border-tear-black/20 bg-tear-white text-tear-black text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-tear-teal focus:border-transparent transition-all duration-200 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-tear-orange text-tear-white font-medium text-xs md:text-base px-6 py-2.5 md:px-8 md:py-3.5 rounded-lg md:rounded-xl shadow-md hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Enviar Mensagem
            </button>
          </form>

          <div className="md:col-span-2 flex flex-col justify-between p-4 sm:p-6 md:p-8 bg-tear-black/5 border border-tear-black/10 rounded-xl md:rounded-2xl">
            <div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-tear-teal/10 flex items-center justify-center mb-3 md:mb-4 text-tear-teal">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-base md:text-xl font-bold text-tear-black mb-1 md:mb-2">
                Atendimento Direto
              </h3>
              <p className="text-tear-black/70 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
                Para respostas rápidas ou dúvidas diretas sobre orçamentos.
              </p>
            </div>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-tear-teal text-tear-white font-medium text-xs md:text-base px-4 py-2.5 md:px-6 md:py-3.5 rounded-lg md:rounded-xl shadow-md hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300"
            >
              Conversar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
