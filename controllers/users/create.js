import User from "../../models/User.js";

let createOne = async(req,res,next)=>{
    try {
        let userInfo = req.body
        console.log(userInfo);

        let createUser = await User.create(userInfo)
        return res.status(201).json({
            response: createUser
        })
        
    }catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let createMany = async (req, res, next) => {
    try {
        let userInfo = req.body; 
        console.log(userInfo);

        let createdUsers = await User.insertMany(userInfo);
        return res.status(201).json({
            response: createdUsers
        });
        
    } catch (error) {
        return res.status(500).json({
            response: error.message
        });
    }
};

export {createOne, createMany};
