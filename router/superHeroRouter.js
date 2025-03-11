import { Router } from "express";
import {allSuperHero, superHeroByName, superHeroById} from "../controllers/superHero/read.js";
import {createOne, createMany} from "../controllers/superHero/create.js";

const routerSuperHero = Router();

routerSuperHero.get( '/allSuperHero', allSuperHero)
routerSuperHero.get('/name/:nameParams',superHeroByName)
routerSuperHero.get('/id/:idParams',superHeroById)
routerSuperHero.post('/superHeroCreateOne', createOne)
routerSuperHero.post('/superHeroCreateMany', createMany)


export default routerSuperHero;