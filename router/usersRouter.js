import { Router } from "express";
import {userByName,allUser,userById} from "../controllers/users/read.js"
import {createOne, createMany} from "../controllers/users/create.js";

const routerUsers = Router()

routerUsers.get('/allUsers',allUser)
routerUsers.get('/name/:nameParams',userByName)
routerUsers.get('/id/:idParams',userById)
routerUsers.post('/userCreateOne', createOne)
routerUsers.post('/userCreateMany', createMany)



export default routerUsers