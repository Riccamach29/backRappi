import Videogame from "../../models/Videogame.js";

let createOne = async(req,res,next)=>{
    try {
        let videogameInfo = req.body
        console.log(videogameInfo);

        let createVideogame = await Videogame.create(videogameInfo)
        return res.status(201).json({
            response: createVideogame
        })
        
    }catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let createMany = async (req, res, next) => {
    try {
        let videogamesInfo = req.body; 
        console.log(videogameInfo);

        let createdVideogames = await Videogame.insertMany(videogamesInfo);
        return res.status(201).json({
            response: createdVideogames
        });
        
    } catch (error) {
        return res.status(500).json({
            response: error.message
        });
    }
};

export {createOne, createMany};
