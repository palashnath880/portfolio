import nodemailer from 'nodemailer';

const email = process.env.NODEMAILER_EMAIL;
const password = process.env.NODEMAILER_PASSWORD;
const to_email = process.env.EMAIL;

const transporter = nodemailer.createTransport({
    // host: 'smtp.gmail.com',
    // port: 587,
    // secure: false,
    auth: {
        user: email,
        pass: password,
    },
    service: 'gmail',
    // name: 'My Portfolio'
});

export default transporter;

export const mailOptions = {
    to: to_email,
    from: {
        name: `My Portfolio`,
        address: email,
    },
};