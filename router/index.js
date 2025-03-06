import { Router } from "express";
import routerUsers from "./usersRouter.js";

let routerIndex = Router();
routerIndex.use('/users', routerUsers);

export default routerIndex;