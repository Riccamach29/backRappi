import Videogame from '../../models/Videogame.js';

let allVideogame = async(req,res,next)=>{
    try {
        let all = await Videogame.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let videogameByName = async(req,res,next)=>{
    try {
        let nameQuery = req.params.nameParams
        console.log(nameQuery);        
        let all = await Videogame.find({name: nameQuery})

        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let videogameById = async (req,res,next)=>{
    try {

        let idQuery = req.params.idParams
        console.log(idQuery);
        let all = await Videogame.findById(idQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}






export  {allVideogame, videogameByName, videogameById};