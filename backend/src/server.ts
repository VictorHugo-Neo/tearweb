import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const FRONTEND_URL = process.env.FRONTEND_URL || '*';

// Middlewares
app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json());

// Rota de Health Check
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Backend rodando perfeitamente!' });
});

// Rota de Contato
app.post('/api/contato', async (req: Request, res: Response): Promise<void> => {
  try {
    const { nome, email, projeto } = req.body;

    // Validação básica dos campos
    if (!nome || !email || !projeto) {
      res.status(400).json({
        success: false,
        error: 'Por favor, preencha todos os campos obrigatórios (nome, email, projeto).',
      });
      return;
    }

    // Validação simples de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        success: false,
        error: 'Por favor, insira um e-mail válido.',
      });
      return;
    }

    console.log('[BACKEND /api/contato] Formulário recebido:');
    console.log(`- Nome: ${nome}`);
    console.log(`- E-mail: ${email}`);
    console.log(`- Projeto: ${projeto}`);

    const resendApiKey = process.env.RESEND_API_KEY;
    const destinoEmail = process.env.DESTINO_EMAIL;

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
        console.error('[BACKEND Resend Error]:', emailResult.error);
        res.status(500).json({
          success: false,
          error: 'Erro ao enviar o e-mail de contato.',
        });
        return;
      }

      console.log('[BACKEND] E-mail enviado com sucesso via Resend!');
    } else {
      console.warn('[BACKEND] AVISO: RESEND_API_KEY não configurada no .env');
    }

    res.status(200).json({
      success: true,
      message: 'Mensagem recebida com sucesso!',
    });
  } catch (error) {
    console.error('[BACKEND Error]:', error);
    res.status(500).json({
      success: false,
      error: 'Erro interno no servidor ao processar a mensagem.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor Backend rodando na porta ${PORT}`);
  console.log(`📍 Endpoint de contato: http://localhost:${PORT}/api/contato`);
});
