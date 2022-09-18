import * as nodemailer from "nodemailer";

export const sendEmail = async (email: string, code: string) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
      auth: {
        user: process.env.GMAIL_ACCAUNT,
        pass: process.env.GMAIL_PASSWORD,
      }
  })

  await transporter.sendMail({
    from: process.env.GMAIL_ACCAUNT,
    to: email,
    html: `<h1>Thank for your registration</h1>
      <p>To finish registration please follow the link below:
         <a hreh='https://somesite.com/confirm-email?code=${code}'>complete registration</a>
     </p>`,
    subject: 'Регистрация',
  })

}