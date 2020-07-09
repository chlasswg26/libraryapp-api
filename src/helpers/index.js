const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    response: function(response, status, data, pagination) {
        const result = {};
        result.status = status || 200;
        result.data = data;
        if (pagination !== null) result.pagination = pagination;
        return response.status(result.status).json(result);
    },
    random: function(length) {
        let result = '';
        const characters = '0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    },
    nodemailer: function(email, subject, template) {
        const transporter = nodemailer.createTransport({
            service: process.env.SERVICE_MAILER,
            auth: {
                user: process.env.SERVICE_EMAIL,
                pass: process.env.SERVICE_EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.SERVICE_EMAIL,
            to: email,
            subject: subject,
            html: template,
        };

        transporter.verify(function(error, success) {
            if (error) {
                console.log('Got error while verify @ ', error);
            } else {
                console.log('SMTP connection @ ', success);
                transporter.sendMail(mailOptions, function(error, info) {
                    if (error) {
                        console.log('Got error while sending @ ', error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
            }
        });
    },
    convertObjectToPlainText: function(object, prefix) {
        let string = [],
            plainText;
        for (plainText in object) {
            if (object.hasOwnProperty(plainText)) {
                const k = prefix ? prefix + '[' + plainText + ']' : plainText,
                    v = object[plainText];
                string.push(
                    v !== null && typeof v === 'object'
                        ? convertObjectToPlainText(v, k)
                        : encodeURIComponent(k) + '=' + encodeURIComponent(v)
                );
            }
        }
        return string.join('&');
    },
};
