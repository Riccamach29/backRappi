import { Router } from "express";
import {allScientist, scientistByName, scientistById} from "../controllers/scientist/read.js";
import {createOne, createMany} from "../controllers/scientist/create.js";

const routerScientist = Router();

routerScientist.get( '/allScientist', allScientist)
routerScientist.get('/name/:nameParams', scientistByName)
routerScientist.get('/id/:idParams', scientistById)
routerScientist.post('/scientistCreateOne', createOne)
routerScientist.post('/scientistCreateMany', createMany)



export default routerScientist;