import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./db/db.js";
import sendMail from "./utils/mail.js";
import cors from "cors";
import {startCronJob} from "./cron.js";

const app = express();
app.use(cors({
    origin: 'https://skilllab-2gi24cs091-om-tubachis-projects.vercel.app',
}));
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = await connectDB();

// single end point that gets the email address
// input: email address
// if already registered send `already signed up!` with status code of 202
// if not registered, save email to db, then run the mail utility once

app.post('/signup', async (req, res) => {
    if (!db) {
        return res
            .status(404)
            .json({
                message: 'Failed to connect to DB',

            })
    }

    const {email} = req.body;
    if (!email || !email.trim()) {
        return res
            .status(400)
            .json({
                message: 'Invalid email address',

            })
    }

    const exists = await db.findOne({email})

    if (exists) {
        return res
            .status(202)
            .json({
                message: 'Already registered',
            })
    }

    const inserted = await db.insertOne({email})

    if (!inserted) {
        return res
            .status(503)
            .json({
                message: 'Failed to save email to address',
            })
    }
//     run the mail service once
    const result = await sendMail(email, 'Hello world')

    return res
        .status(200)
        .json({
            message: 'Sign up successful, email sent',
        })
})


app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}, ${`http://localhost:${process.env.PORT || 3000}`}`);
});

startCronJob(db)