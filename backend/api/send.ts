const resend = require('../lib/resend.ts');

const send = async (req, res) => {
    switch (req.method) {
        case 'GET': {
            const data = resend.emails.send({
                from: req.from,
                to: req.to,
                subject: req.subject,
                react: "HAHAHAHA",
            });

            res.status(200).send(data);
            break;
        }
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
  };

