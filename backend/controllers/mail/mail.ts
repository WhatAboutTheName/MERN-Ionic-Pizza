import nodemailer from 'nodemailer';

export class SendMail {

    constructor(email: string, password: string, name: string) {
        let transporter = nodemailer.createTransport({
            host: 'smtp.mail.ru',
            port: 587,
            secure: false,
            auth: {
              user: 'meniatodinxui@gmail.com',
              pass: 'ne_fontan159635gg'
            }
        });
        this.sendMail(transporter, email, password, name);
    }

    async sendMail(transporter: any, email: string, password: string, name: string) {
        try {
            let result = await transporter.sendMail({
                from: '"Tim" <ionic-pizza@bk.ru>',
                to: `${email}`,
                subject: "Message from Ionic-pizza",
                text: "This message was sent from Ionic-pizza.",
                html: `Hello, ${name}. Your password ${password}`
            });
        } catch (err) {
            console.log(err);
        }
    }
}