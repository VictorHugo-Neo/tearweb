import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS || '*';

const originsArray = ALLOWED_ORIGINS.includes(',')
  ? ALLOWED_ORIGINS.split(',').map((o) => o.trim())
  : ALLOWED_ORIGINS;

app.use(cors({ origin: originsArray }));
app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'API online' });
});

app.post('/api/contato', async (req: Request, res: Response): Promise<void> => {
  try {
    const { nome, email, projeto } = req.body;

    if (!nome || !email || !projeto) {
      res.status(400).json({
        success: false,
        error: 'Preencha todos os campos (nome, email, projeto).',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        success: false,
        error: 'E-mail inválido.',
      });
      return;
    }

    console.log('[API /api/contato] Formulário recebido:', { nome, email, projeto });

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
            <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Projeto:</strong></p>
            <blockquote style="background: #f9f9f9; padding: 15px; border-left: 4px solid #0969da; margin: 0; white-space: pre-wrap;">${projeto}</blockquote>
          </div>
        `,
      });

      if (emailResult.error) {
        console.error('[API Resend Error]:', emailResult.error);
        res.status(500).json({
          success: false,
          error: 'Erro ao enviar o e-mail de contato.',
        });
        return;
      }
    } else {
      console.warn('[API] RESEND_API_KEY não configurada');
    }

    res.status(200).json({
      success: true,
      message: 'Mensagem recebida com sucesso!',
    });
  } catch (error) {
    console.error('[API Error]:', error);
    res.status(500).json({
      success: false,
      error: 'Erro interno no servidor.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
