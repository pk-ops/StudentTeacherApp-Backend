import { ObjectId } from "mongodb";
import { client } from "../index.js";

export async function getAllStudent(){
    return await client.db("student-admin").collection("students").find().toArray();
}

export async function createStudent(data){
    return await client.db("student-admin").collection("students").insertOne(data);
}

export async function editStudentbyId(id, data) {
    return await client.db("student-admin").collection("students").updateOne({ _id : new ObjectId(id) },{ $set: data });
  }

export async function getStudentbyId(id) {
    return await client.db("student-admin").collection("students").findOne({ _id :new ObjectId(id) });
  }

  export async function deleteStudentById(id) {
    return await client.db("student-admin").collection("students").deleteOne({ _id :new ObjectId(id) });
  }
