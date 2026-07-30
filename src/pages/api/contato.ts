import type { APIRoute } from 'astro';
import { Resend } from 'resend';

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

    const resendApiKey = import.meta.env.RESEND_API_KEY;
    const destinoEmail = import.meta.env.DESTINO_EMAIL;

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const emailResult = await resend.emails.send({
        from: 'TearWeb Contato <onboarding@resend.dev>',
        to: [destinoEmail || 'seu-email@dominio.com'],
        replyTo: email,
        subject: `[Novo Orçamento] ${nome}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #000; border-bottom: 2px solid #eee; padding-bottom: 10px;">Novo Pedido de Orçamento</h2>
            <p><strong>Nome / Empresa:</strong> ${nome}</p>
            <p><strong>E-mail de Contato:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Descrição do Projeto:</strong></p>
            <blockquote style="background: #f9f9f9; padding: 15px; border-left: 4px solid #0969da; margin: 0; white-space: pre-wrap;">${projeto}</blockquote>
          </div>
        `,
      });

      if (emailResult.error) {
        console.error('[API Resend Error]:', emailResult.error);
        return new Response(
          JSON.stringify({
            success: false,
            error: 'Erro ao enviar o e-mail de contato.',
          }),
          {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          }
        );
      }

      console.log('[API /api/contato] E-mail enviado com sucesso via Resend!');
    } else {
      console.warn('[API /api/contato] AVISO: RESEND_API_KEY não foi definida no arquivo .env.');
    }

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
