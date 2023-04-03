import  express  from "express";
import { auth } from "../middleware/auth.js";
import { createTeacher, getAllTeachers } from "../services/helper.teacher.js";

const router=express.Router();

router.post("/",async function(req,res){
    const data=req.body;
    console.log(data)

    const result= await createTeacher(data)
    res.send(result);
})

router.get("/teacher",async function(req,res){
    const teacher = await getAllTeachers()
    console.log(teacher)
    res.send(teacher);
})


export const teacherRouter=router;