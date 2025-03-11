import { Router } from "express";
import {allVideogame, videogameByName, videogameById} from "../controllers/videogame/read.js";
import {createOne, createMany} from "../controllers/videogame/create.js";

const routerVideogames = Router();

routerVideogames.get( '/allVideogame', allVideogame)
routerVideogames.get('/name/:nameParams',videogameByName)
routerVideogames.get('/id/:idParams',videogameById)
routerVideogames.post('/videogameCreateOne', createOne)
routerVideogames.post('/videogameCreateMany', createMany);

export default routerVideogames;