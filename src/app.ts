import express from 'express'
import userRouter from './Routes/userRoutes';
import toDoRouter from './Routes/toDoRoutes';
const app = express();
const port = 3000;
app.use(express.json());
app.use("/users",userRouter);
app.use("/todo",toDoRouter);
app.listen(port, ()=>{
    console.log("helooooz");
})