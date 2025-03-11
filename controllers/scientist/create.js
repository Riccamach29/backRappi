import Scientist from "../../models/Scientist.js";

let createOne = async(req,res,next)=>{
    try {
        let scientistInfo = req.body
        console.log(scientistInfo);

        let createScientist = await Scientist.create(scientistInfo)
        return res.status(201).json({
            response: createScientist
        })
        
    }catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let createMany = async (req, res, next) => {
    try {
        let scientistsInfo = req.body;
        console.log(scientistsInfo);

        let createdScientists = await Scientist.insertMany(scientistsInfo);
        return res.status(201).json({
            response: createdScientists
        });

    } catch (error) {
        return res.status(500).json({
            response: error.message
        });
    }
};

export {createOne, createMany};
        