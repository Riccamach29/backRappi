import express from "express";
import 'dotenv/config.js';
import './config/database.js';
import cors from 'cors';
import morgan from "morgan";
import routerIndex from "./router/index.js";

const server = express();

const PORT = process.env.PORT || 8080
const ready = () => console.log("Server is ready in port:" + PORT);


/* server.get("/",(request, response) => {
    response.send("Hola, bienvenidos a EXPRESS!")
 })

 server.get("/hola",(request, response) => {
    response.send("Chao")
 }) */

//configuraciones basicas
server.use(express.urlencoded({ extended: true }));   //habilita querries y parametros en la url
server.use(express.json());  //habilita el uso de json del servidor
server.use(cors()); //habilita el uso de cors
server.use(morgan("dev")); //habilita el uso de morgan

//configurar el enrutador
server.use('/api',routerIndex)



server.listen(PORT, ready);
