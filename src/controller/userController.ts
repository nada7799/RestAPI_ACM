import { Request, Response } from "express";
import { getAllCurrentUsersAsync, getUserByIdAsync, createNewUserAsync } from "../services/userService";
import { usertype } from "../types/userType";
const getAllCurrentUsersController = async (req: Request, res: Response) => {
    try {
        const allusersReturned = await getAllCurrentUsersAsync();
        res.status(200).json({ Message: "Success getting all users", Data: allusersReturned });
    }
    catch (error: Error | any) {
        res.status(405).json({ error });
    }
}
const getUserByIdController = (req: Request, res: Response) => {
    let id: number = req.params.id as number | any;
    try {
        let theUser = getUserByIdAsync(id);
        res.status(200).json({ Message: "Success helloooo", Data: theUser });
    }
    catch (error: Error | any) {
        res.status(406).json({ error });
    }
}

const createNewUserController = (req: Request, res: Response) => {
    const newUser = req.body as usertype;
    let thesameuser = createNewUserAsync(newUser);
    try {
        let thesameuser = createNewUserAsync(newUser);
        res.status(200).json({ Message: "User added successfully" });
    }
    catch (error: Error | any) {
        res.status(407).json({ error });
    }
}
export { getAllCurrentUsersController, getUserByIdController, createNewUserController };