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

export default allScientist;