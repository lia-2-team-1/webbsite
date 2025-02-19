import { Resend } from 'resend';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    methods: ['POST', 'GET'],
    allowedHeaders: ['Content-Type'],
  }),
);
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
      to: ['delivered@resend.dev'], // Du kan testa skicka till din egna mail
      subject: 'Hello World',
      html: '<strong>It works!</strong>',
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({
        // Send error response
        success: false,
        error: error.message,
        resendData: null,
      });
    }

    console.log('Email sent:', data);
    res.status(200).json({
      // Send success response
      success: true,
      error: null,
      resendData: data,
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      resendData: null,
    });
  }
});
