import { Resend } from 'resend';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Test route för att se att backend är uppe -> http://localhost:5000/api/test
app.get('/api/test', (_, res) => {
  res.json({ message: 'Backend is working!' });
});

// Endpoint för Resend som används i <EmailTest />
app.post('/api/send-email', async (_, res) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello World',
      html: '<strong>It works!</strong>', // Här kommer ni kunna skicka in en component när ni  lägger till react email för hur er Email Template ska se ut
    });

    if (error) {
      return console.error('There´s been an error', { error });
    }

    console.log('wooooorking', { data });
  } catch (error) {
    console.error('Error sending email:', error);
  }
});
