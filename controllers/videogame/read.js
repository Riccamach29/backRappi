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

export default allVideogame;