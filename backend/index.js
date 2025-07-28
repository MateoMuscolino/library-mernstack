import { PORT, mongoDBURL } from "./config.js";
import {mongoose} from 'mongoose';
import { Book } from "./models/bookModel.js";
import express, { response } from 'express';
import booksRoutes from './routes/booksRoutes.js';
import cors from "cors"

const app = express();

app.use(express.json());

//middleware para manejar CORS

app.use(cors());

// app.use(
//     cors({
//         origin: 'http://localhost:5555',
//         methods: ['GET','POST','PUT', 'DELETE'],
//         allowHeaders: ['Content-Type']
//     })
// );


app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Bienvenido a mi stack MERN');
});


app.use('/books', booksRoutes);



mongoose
    .connect(mongoDBURL)
    .then(()=> {
        console.log("App conectada a la base de datos")
        app.listen(PORT, () => {
          console.log(`App is listening to port: ${PORT}`);
        });

    })
    .catch((error)=> {
        console.log(error);
    });