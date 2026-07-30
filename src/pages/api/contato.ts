import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { nome, email, projeto } = data;

    if (!nome || !email || !projeto) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Por favor, preencha todos os campos obrigatórios.',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Por favor, insira um e-mail válido.',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('[API /api/contato] Novo formulário recebido:');
    console.log(`- Nome: ${nome}`);
    console.log(`- E-mail: ${email}`);
    console.log(`- Projeto: ${projeto}`);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Mensagem recebida com sucesso!',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('[API /api/contato] Erro inesperado:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Erro interno no servidor ao processar o formulário.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
