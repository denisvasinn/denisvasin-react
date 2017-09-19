const emailjs = require('emailjs/email');
const config = require('../../config').mail;

const server = emailjs.server.connect({
    user: config.user,
    password: config.password,
    host: 'smtp.gmail.com',
    ssl: true
});

function sendMessage ({name, subject, data, email}) {
    return new Promise((resolve, reject) => {
        this.server.send({
            from: 'Личный сайт',
            to: config.to,
            subject: subject,
            attachment: [
                {
                    data: `Пользователь <b>${name}</b> с эл.ящиком: <a target='_blank' href='mailto:${email}'>${email}</a> сказал:<br/> ${data}`,
                    alternative: true
                }
            ]
        },
        (err, message) => {
            if (err || !message) {
                reject(err || new Error('Ошибка при попытке отправить сообщение.'));
            }
            resolve();
        });
    });
}

function sendSpecials (err) {
    return new Promise((resolve, reject) => {
        this.server.send({
            from: 'Личный сайт.',
            to: config.to,
            subject: 'Неполадки',
            attachment: [
                {
                    data: `На личном сайте возникли какие-то неполадки. Объект ошибки: <br/><code>${JSON.stringify(err, '    ', true)}</code>`,
                    alternative: true
                }
            ]
        },
        (err, message) => {
            if (err || !message) {
                reject(err || new Error('Ошибка при попытке отправить сообщение о неполадке.'));
            }
            resolve();
        });
    });
}

module.exports = {sendMessage, sendSpecials};