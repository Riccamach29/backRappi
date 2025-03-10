import { Router } from "express";
import allScientist from "../controllers/scientist/read.js";

const routerScientist = Router();

routerScientist.get( '/allScientist', allScientist)

export default routerScientist;