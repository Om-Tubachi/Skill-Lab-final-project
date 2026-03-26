import {MongoClient} from 'mongodb'
import dotenv from "dotenv";
dotenv.config();

const string = process.env.STRING
const client = new MongoClient(string)
const connectDB = async () => {
    try{
        await client.connect();
        console.log('connected to db')
        const db = client.db('SkillLab_Emails')
        const collection = db.collection('emails');
        return collection
    } catch(e) {
        console.log(e)
        return null
    }
}

export default connectDB