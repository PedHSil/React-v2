// /pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, phone, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Por favor preencha nome, email e mensagem.' });
  }

  try {
    // transporter usando Gmail SMTP (App Password)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,        // ex: pedroh422silva@gmail.com
        pass: process.env.EMAIL_PASS,        // App password de 16 chars
      },
    });

    const mailOptions = {
      from: `"Site Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, // onde quer receber (padrão: seu email)
      subject: `Contato do site — ${name}`,
      text: `
Nome: ${name}
Email: ${email}
Telefone: ${phone || '-'}

Mensagem:
${message}
      `,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || '-'}</p>
        <hr />
        <p>${message.replace(/\n/g,'<br/>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ ok: true, message: 'Mensagem enviada.' });
  } catch (err) {
    console.error('Erro enviando email:', err);
    return res.status(500).json({ error: 'Erro ao enviar email.' });
  }
}
