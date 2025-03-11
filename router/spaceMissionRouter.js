import { Router } from "express";
import {allSpaceMission, spaceMissionByName, spaceMissionById} from "../controllers/spaceMission/read.js";
import {createOne, createMany} from "../controllers/spaceMission/create.js";

const routerSpaceMission = Router();

routerSpaceMission.get( '/allSpaceMission', allSpaceMission)
routerSpaceMission.get('/name/:nameParams', spaceMissionByName)
routerSpaceMission.get('/id/:idParams', spaceMissionById)
routerSpaceMission.post('/spaceMissionCreateOne', createOne)
routerSpaceMission.post('/spaceMissionCreateMany', createMany)

export default routerSpaceMission;