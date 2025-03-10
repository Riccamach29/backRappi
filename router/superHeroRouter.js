import { Router } from "express";
import allSuperHero from "../controllers/superHero/read.js";

const routerSuperHero = Router();

routerSuperHero.get( '/allSuperHero', allSuperHero)

export default routerSuperHero;