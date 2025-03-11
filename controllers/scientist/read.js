import Scientist from '../../models/Scientist.js';

let allScientist = async(req,res,next)=>{
    try {
        let all = await Scientist.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let scientistByName = async(req,res,next)=>{
    try {
        let nameQuery = req.params.nameParams
        console.log(nameQuery);        
        let all = await Scientist.find({name: nameQuery})

        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let scientistById = async (req,res,next)=>{
    try {
        let idQuery = req.params.idParams
        console.log(idQuery);
        let all = await Scientist.findById(idQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}


export {allScientist, scientistByName, scientistById} ;