import { usertype } from "../types/userType";
let users :usertype[]= [];
function getAllCurrentUsers(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            if(users.length != 0)
            resolve(users);
            throw new Error("user list is empty");
            
        },1000);
    });
}
async function getAllCurrentUsersAsync(){
    try{
    let allusers = await getAllCurrentUsers();
    return allusers;
    }
    catch(error){
        throw error;
    }
}
function getUserById(Id : number){
    return new Promise((resolve) => {
        setTimeout(()=>{
            let usertoreturn=null;
        users.forEach(user => {
                if(user.id == Id){
                    resolve(user);
                }
        }
        );
        throw new Error("user id not found in data");
        },1000);
    });
}
async function getUserByIdAsync(Id : number) {
    try{
        let user = await getUserById(Id);
        return user;
    }
    catch(error){
    throw error;
    }
}
function createNewUser(user: usertype){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(user != null){
            users.push(user);
            resolve(user);
            }
            throw new Error("user is empty");
        },1000);
    });
}
async function createNewUserAsync(user: usertype) {
    try{
    let useradded = await createNewUser(user);
    return useradded;
    }
    catch(error){
    throw error;
    }
}
export{getAllCurrentUsersAsync,getUserByIdAsync,createNewUserAsync};