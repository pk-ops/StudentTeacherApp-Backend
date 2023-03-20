import express from 'express'
import {MongoClient} from 'mongodb'
import dotenv from 'dotenv';
import cors from 'cors'
import { studentRouter } from './routes/students.js';
import { registrationRouter } from './routes/registrationDetails.js';
import { teacherRouter } from './routes/teacher.js';



const app=express();

app.use(express.json());
app.use(cors())

dotenv.config();


const MONGO_URL=process.env.MONGO_URL;

const PORT = process.env.PORT;

async function createConnection(){
    const client = new MongoClient(MONGO_URL)
    await client.connect()
    console.log("Mongo is Connected")
    return client;
}
export const client = await createConnection();

app.use("/student",studentRouter)
app.use("/registration",registrationRouter)
app.use("/teachers",teacherRouter)

app.listen(PORT,()=>console.log(`App started ${PORT}`))