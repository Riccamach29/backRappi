import SpaceMission from "../../models/SpaceMission.js";

let createOne = async(req,res,next)=>{
    try {
        let spaceMissionInfo = req.body
        console.log(spaceMissionInfo);

        let createSpaceMission = await SpaceMission.create(spaceMissionInfo)
        return res.status(201).json({
            response: createSpaceMission
        })
        
    }catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let createMany = async (req, res, next) => {
    try {
        let spaceMissionsInfo = req.body; 
        console.log(spaceMissionsInfo);

        let createdSpaceMissions = await SpaceMission.insertMany(spaceMissionsInfo);
        return res.status(201).json({
            response: createdSpaceMissions
        });
        
    } catch (error) {
        return res.status(500).json({
            response: error.message
        });
    }
};

export {createOne,createMany}