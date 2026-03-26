import nodeCron from "node-cron";
import connectDB from "./db/db.js";
import sendMail from "./utils/mail.js";

const db = await connectDB()

nodeCron.schedule('0 */10 * * * *', async () => {
    if (!db) {
        await sendMail('omrtubachi@gmail.com', 'Maccha your cron job failed because failed to connect to the database')
        return
    }

    const emails = await db.find({email: {$exists: true}}).toArray()
    if (emails?.length === 0) {
        console.log('0 emails found')
        await sendMail('omrtubachi@gmail.com', 'No one has yet signed up')
    }
    for (const email of emails) {
        console.log(`time:${(new Date()).toLocaleTimeString()}`)
        await sendMail(email?.email,
            `Catch up on the latest news - Dated ${(new Date()).toLocaleDateString()} - ${(new Date()).toLocaleTimeString()}`)
        console.log(`sent at: ${(new Date()).toLocaleTimeString()}`)
    }
})