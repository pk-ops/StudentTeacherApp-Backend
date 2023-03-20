import { client } from "../index.js";

export async function createTeacher(data){
    return await client.db("student-admin").collection("teacher").insertOne(data)
}

export async function getAllTeachers(data){
    return await client.db("student-admin").collection("teacher").find().toArray();
}