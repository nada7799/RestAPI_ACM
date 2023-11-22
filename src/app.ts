import express from 'express'
import appRouter from './Routes/router';
const app = express();
const port = 3000;
app.use(express.json());

app.use('/',appRouter)

app.listen(port, () => {
    console.log("Server is listening on port", port);
})