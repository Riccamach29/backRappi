import { Router } from "express";
import allSpaceMission from "../controllers/spaceMission/read.js";

const routerSpaceMission = Router();

routerSpaceMission.get( '/allSpaceMission', allSpaceMission)

export default routerSpaceMission;