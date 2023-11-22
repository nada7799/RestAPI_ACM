import { Router } from "express";
import { addaToDoController, getAllTodosController, getTodosOfaCertainUserController } from "../controller/todoController";
const toDoRouter = Router();

toDoRouter.route("/")
    .get(getAllTodosController)
    .post(addaToDoController);


toDoRouter.get("/:id", getTodosOfaCertainUserController);

export default toDoRouter;