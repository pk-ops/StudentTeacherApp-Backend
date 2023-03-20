import  express  from "express";
import { auth } from "../middleware/auth.js";
import { createStudent, deleteStudentById, editStudentbyId, getAllStudent, getStudentbyId } from "../services/helper.js";


const router=express.Router();

router.get("/",auth,async function(req,res){
//     if(req.query.phoneno){
//         req.query.phoneno=+req.query.phoneno;
//     }
// console.log(req.query)
    const stud = await getAllStudent()
    console.log(stud)
    res.send(stud);
})


router.post("/",auth,async function(req,res){
    const data=req.body;
    console.log(data)

    const result= await createStudent(data)
    res.send(result);
})

router.get("/:id",async function(req,res){
    const {id}=req.params;
    console.log(id);


    const student=await getStudentbyId(id);
    console.log(student)
    student?res.send(student):res.status(404).send({msg:"student not found"})
    console.log(student)
})

router.put("/:id",async function(req,res){
    const {id}=req.params;
    console.log(req.params,id)
    const data=req.body;

    const result=await editStudentbyId(id,data);
    res.send(result);
})

router.delete("/:id",async function(req,res){
    const { id } =req.params;
    console.log(id);
    console.log(req.params,id)
  
    //db.movies.deleteOne({id."101"})
    const result= await deleteStudentById(id)
  
    console.log(result);
    result.deletedCount>0
    ? res.send({msg:"movie delete successfully"})
    :res.status(404).send({msg:"movie not found"})
})
export const studentRouter=router;