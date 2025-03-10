import { Router } from "express";
import allCar from "../controllers/cars/read.js";

const routerCars = Router();

routerCars.get( '/allCars', allCar)

export default routerCars;