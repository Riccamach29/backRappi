import { Router } from "express";
import allVideogame from "../controllers/videogame/read.js";

const routerVideogames = Router();

routerVideogames.get( '/allVideogame', allVideogame)

export default routerVideogames;