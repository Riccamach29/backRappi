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

export default allSpaceMission;