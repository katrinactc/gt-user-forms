const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    host: "smtp.gmail.com",
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
    secure: true,
});

module.exports = {
    transporter
};