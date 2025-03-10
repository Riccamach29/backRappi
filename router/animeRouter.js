import { Router } from "express";
import allAnime from "../controllers/anime/read.js";

const routerAnimes = Router();

routerAnimes.get( '/allAnimes', allAnime)

export default routerAnimes;