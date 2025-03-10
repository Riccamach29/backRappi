import SuperHero from '../../models/Superhero.js';

let allSuperHero = async(req,res,next)=>{
    try {
        let all = await SuperHero.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export default allSuperHero;