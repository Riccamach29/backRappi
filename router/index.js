import { Router } from "express";
import routerUsers from "./usersRouter.js";
import routerCars from "./carsRouter.js";
import routerAnimes from "./animeRouter.js";
import routerScientist from "./scientistRouter.js";
import routerSpaceMission from "./spaceMissionRouter.js";
import routerSuperHero from "./superHeroRouter.js";
import routerVideogames from "./videogameRouter.js";

let routerIndex = Router();
routerIndex.use('/users', routerUsers);
routerIndex.use('/cars', routerCars);
routerIndex.use('/animes', routerAnimes);
routerIndex.use('/scientists', routerScientist);
routerIndex.use('/spaceMissions', routerSpaceMission);
routerIndex.use('/superHeroes', routerSuperHero);
routerIndex.use('/videogames', routerVideogames);


export default routerIndex;