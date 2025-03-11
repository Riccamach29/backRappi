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

let superHeroByName = async(req,res,next)=>{
    try {
        let nameQuery = req.params.nameParams
        console.log(nameQuery);        
        let all = await SuperHero.find({name: nameQuery})

        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let superHeroById = async (req,res,next)=>{
    try {
        let idQuery = req.params.idParams
        console.log(idQuery);
        let all = await SuperHero.findById(idQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export  {allSuperHero, superHeroByName, superHeroById};
