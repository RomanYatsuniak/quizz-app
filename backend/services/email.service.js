const nodemailer = require('nodemailer')

module.exports = function sendMail(userMail, userSubject, userText) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_LOGIN,
            pass: process.env.EMAIL_PASS
        }
    })

    const options = {
        from: process.env.EMAIL_LOGIN,
        to: userMail,
        subject: userSubject,
        text: userText
    }

    transporter.sendMail(options, (err, info) => {
    })
}
