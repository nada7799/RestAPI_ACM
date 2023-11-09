import { tasktype } from "../types/taskType";
import { getUserByIdAsync } from "./userService";
let todos : tasktype[] = [
    {
    id :1,
    title:"blalal",
    description:"nananna",
    userId:1
    },
    {
        id :1,
        title:"blalal",
        description:"nananna",
        userId:1
        },
        {
            id :2,
            title:"blalal2",
            description:"nananna2",
            userId:1
            },
            {
                id :3,
                title:"blalal3",
                description:"nananna3",
                userId:2
                },
                {
                    id :4,
                    title:"blalal4",
                    description:"nananna4",
                    userId:3
                    },
                    {
                        id :5,
                        title:"blalal5",
                        description:"nananna5",
                        userId:4
                        },

]

function getAllTodos(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            if(todos != null){
                resolve(todos);
            }
            throw new Error("todo is empty");
        },1000);
    })
}
async function getAllTodosAsync() {
    try{
        let alltodos = await getAllTodos();
        return alltodos;
    }
    catch(error){
        throw error;
    }
}

function getTodosOfaCertainUser(UserId: number){
    return new Promise((resolve) => {
        setTimeout(()=>{
            let todolist:tasktype[]=[];
            todos.forEach(t=>{
                if(t.userId==UserId){
                    todolist.push(t);
                }
            });
            if(todolist.length!=0){
                resolve(todolist);
            }
            throw new Error("user is not found in todo list");
        },1000);
    })
}
async function getTodosOfaCertainUserAsync(UserId: number) {
    try{
        let todolist= await getTodosOfaCertainUser(UserId);
        return todolist;
    }
    catch(error){
        throw error;
    }
}
function addaToDo(task: tasktype){
    return new Promise((resolve) => {
        setTimeout(()=>{
        let userid = task.userId;
            try {
                let user = getUserByIdAsync(userid);
                    todos.push(task);
                    resolve(task);
            } catch (error) {
                throw error;
            }
        },1000);
    })
}
async function addaToDoAsync(task: tasktype) {
    try{
        let t = await addaToDo(task);
        return t;
    }
    catch(error){
        throw new Error("user is not found so we cannot add the task");
    }
}
export {getAllTodosAsync,getTodosOfaCertainUserAsync,addaToDoAsync};