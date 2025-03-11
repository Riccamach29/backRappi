import SpaceMission from '../../models/SpaceMission.js';

let allSpaceMission = async(req,res,next)=>{
    try {
        let all = await SpaceMission.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let spaceMissionByName = async(req,res,next)=>{
    try {
        let nameQuery = req.params.nameParams
        console.log(nameQuery);        
        let all = await SpaceMission.find({name: nameQuery})

        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let spaceMissionById = async (req,res,next)=>{
    try {
        let idQuery = req.params.idParams
        console.log(idQuery);
        let all = await SpaceMission.findById(idQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}


export  {allSpaceMission, spaceMissionByName, spaceMissionById};