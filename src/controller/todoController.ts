import { Request,Response } from "express";
import { getAllTodosAsync,getTodosOfaCertainUserAsync,addaToDoAsync } from "../services/todoService";
import { tasktype } from "../types/taskType";

const getAllTodosController = (req:Request,res:Response)=>{
try{
    let alltodosreturned = getAllTodosAsync();
    res.status(200).json({Message:"Success jjjj", Data: alltodosreturned});
}
catch(error){
    res.status(408).json({error});
}
}
const getTodosOfaCertainUserController = (req:Request,res:Response)=>{
    let id : number= req.params.id as number|any;
    try{
        let alltodosofUserreturned = getTodosOfaCertainUserAsync(id);
        res.status(200).json({Message:"Success jjjjj", Data: alltodosofUserreturned});
    }
    catch(error){
        res.status(409).json({error});
    }
}
const addaToDoController = (req:Request,res:Response)=>{
    const newTodo = req.body as tasktype;
    try{
        let sametodo = addaToDoAsync(newTodo);
        res.status(200).json({Message:"Task added successfully"});
    }
    catch(error){
        res.status(410).json({error});
    }
}
export {addaToDoController,getAllTodosController,getTodosOfaCertainUserController};
