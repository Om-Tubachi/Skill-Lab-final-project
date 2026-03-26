import nodeCron from "node-cron";
import sendMail from "./utils/mail.js";

export const startCronJob = async (db) => {
    nodeCron.schedule('0 9 * * 0', async () => {
        if(!db) {
            await sendMail('omrtubachi@gmail.com', 'Maccha your cron job failed because failed to connect to the database')
            return
        }

        const emails = await db.find({ email: { $exists: true } }).toArray()
        if(emails?.length === 0) {
            await sendMail('omrtubachi@gmail.com', 'No one has yet signed up')
        }

        for(const email of emails){
            await sendMail(email, 'Hello world!')
        }
    })
}