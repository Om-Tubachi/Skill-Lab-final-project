import nodemailer from 'nodemailer'
import dotenv from "dotenv";
import {generatePDF} from "./generatePDF.js";
import summarize from './summarize.js'
dotenv.config()

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER,
        pass: process.env.APP_PASS
    }
});

const sender = {
    address: process.env.USER,
    name: "Om",
};

const sendMail = async (to, message) => {
    const markedText = await summarize()
    const pdfBuffer = await generatePDF(markedText)

    return transport.sendMail({
        from: sender,
        to: to,
        subject: "The weekly React report",
        text: message,
        attachments: [{
            filename: 'React-report.pdf',
            content: pdfBuffer,
            contentType: 'application/pdf'
        }]
    })
        .then((res) => {
            console.log('suck-ces')
            return { status: 200, message: 'Email sent successfully' }
        })
        .catch(err => {
            console.log(err)
            return { status: 500, message: err.message }
        })
}

export default sendMail;



// await sendMail('omrtubachi@gmail.com',`Catch up on the latest news - Dated ${(new Date()).toLocaleDateString()} - ${(new Date()).toLocaleTimeString()}`,  buffer)