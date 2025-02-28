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

/**
*   THIS NEEDS A RESEND API KEY AND A VERIFIED DOMAIN TO GO ALONG WITH IT.
*   I HAVE USED MY OWN DOMAIN FOR TESTING PURPOSES BUT AS THAT IS TIED TO 
*   MY PERSONALS IT WILL NOT BE USED IN PROD.
* */
// Endpoint för Resend som används i <EmailTest />
app.post('/api/send-email/', async (req, res) => {
  const email = req.body;
  try {
    const { data, error } = await resend.emails.send({
      from: `hello <automagic@resend.lappelduvide.net>`, // THIS SHOULD BE CHANGED TO THE APPROPRIATE MAIL
      to: [`${email.to}`, `automagic@resend.lappelduvide.net`], // SEND TO USER, AS WELL AS A CARBON COPY TO ORGS INBOX
      subject: `${email.subject}`,
      html: `${email.body}`,
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


/**
    *
    * test function to see if req.body works.
    *
    * */

app.post('/api/test', async (req, res) => {
  console.log(`API-TEST SUCCESSFUL: \n`, req.body);
  console.log(`${req.body.to} \n${req.body.subject} \n${req.body.react}`);
  res.send();
});
