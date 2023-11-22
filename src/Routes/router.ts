import { Router } from "express";
import userRouter from './userRoutes';
import toDoRouter from './toDoRoutes';
const appRouter = Router();

appRouter.use("/todos", toDoRouter);
appRouter.use('/users', userRouter)

export default appRouter;