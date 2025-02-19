import { Resend } from 'resend';

const send = async (req) => {
    const { method } = req;

    switch (method) {
        case 'GET': {
            const data = await Resend.emails.send({
                from: 'automagic@lappelduvide.net',
                to: ['seattledraws@gmail.com'],
                subject: 'testing',
                react: <h1>LMFAO</h1>,
            });
            // response is undefined
            response.status(200).send(data);
            break;
        }
        default:
            response.setHeader('Allow', ['GET']);
            response.status(405).end(`Method ${method} Not Allowed`);
    }
};

export default send;
