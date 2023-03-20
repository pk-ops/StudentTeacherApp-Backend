import { client } from "../index.js";

export async function createAdmin(data) {
    return await client.db("student-admin").collection("admin").insertOne(data);   
}

export async function getAdminByName(username){
    return await client.db("student-admin").collection("admin").findOne({username:username})
  }

  export async function getAdminByEmail(email){
    return await client.db("student-admin").collection("admin").findOne({email:email})
  }