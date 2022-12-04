const sgMail = require('@sendgrid/mail')
const apiKey=process.env.SENDGRID_API_KEY
sgMail.setApiKey(apiKey)
console.log(apiKey)
exports.sendEmail=async (options)=> {
    const msg = {
        to: options.email, // Change to your recipient
        from: 'kalyanborah456@gmail.com', // Change to your verified sender
        subject: options.subject,
        text: options.message,
        html: `<strong>${options.message}If you doesn\'t forget your password, please ignore this email!</strong>`,
    }
    console.log(msg)
    await sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}