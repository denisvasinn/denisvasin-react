const emailjs = require('emailjs/email');
const config = require('../../config').mail;

const server = emailjs.server.connect({
    user: config.user,
    password: config.password,
    host: config.host,
    ssl: config.ssl
});

function send (subject, data) {
    return new Promise((resolve, reject) => {
        this.server.send({
            from: 'Личный сайт',
            to: config.to,
            subject: subject,
            attachment: [
                {
                    data: data,
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

function sendMessage ({name, subject, data, email}) {
    data = `Пользователь <b>${name}</b> с эл.ящиком: <a target='_blank' href='mailto:${email}'>${email}</a> сказал:<br/> ${data}`;
    return send(subject, data);
}

function sendSpecials (err) {
    const subject = 'Неполадки';
    const data = `На личном сайте возникли какие-то неполадки. Объект ошибки: <br/><code>${JSON.stringify(err, '    ', true)}</code>`;
    return send(subject, data);
}

module.exports = {sendMessage, sendSpecials};