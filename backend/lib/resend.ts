const Resend = require('resend');
const resend = () => {
    new Resend(process.env.RESEND);
}
