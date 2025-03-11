import Superhero from "../../models/Superhero.js";

let createOne = async(req,res,next)=>{
    try {
        let superHeroInfo = req.body
        console.log(superHeroInfo);

        let createSuperHero = await Superhero.create(superHeroInfo)
        return res.status(201).json({
            response: createSuperHero
        })
        
    }catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let createMany = async (req, res, next) => {
    try {
        let superHeroInfo = req.body; 
        console.log(superHeroInfo);

        let createdSuperHeroes = await Superhero.insertMany(superHeroInfo);
        return res.status(201).json({
            response: createdSuperHeroes
        });
        
    } catch (error) {
        return res.status(500).json({
            response: error.message
        });
    }
};

export {createOne, createMany};