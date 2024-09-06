const User = require('../model/userModel')

const create = async(req,res)=>{
    try{
        const userData = new User(req.body)
        if(!userData){
            return res.status(404).send({msg:'User data not found'})
        }
        await userData.save()
        res.status(200).json({msg:'User created successfully'})
    }
    catch(err){
        res.status(500).json({error:err})
    }
}

const getAll = async(req,res)=>{
    try{
        const userData = await User.find()
        if(!userData){
            return res.status(404).send({msg:'User data not found'})
        }
        res.status(200).json(userData)
    }
    catch(err){
        res.status(500).json({error:err})
    }
}

const getOne  = async(req,res)=>{
    try{
        const id = req.params.id
        const userExists = await User.findById(id)
        if(!userExists){
            return res.status(404).send({msg:'User not found'})
        }
        res.status(200).json(userExists)
    }
    catch(err){
        res.status(500).json({error:err})
    }
}

const update = async(req, res) =>{
    try {

        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(401).json({msg:"User not found"});
        }

        const updatedData = await User.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg: "User updated successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}



const deleteUser = async(req,res)=>{
    try{
        const id = req.params.id
        const userExists = await User.findById(id)
        if(!userExists){
            return res.status(404).json({msg:'User not found'})
        }
        await User.findByIdAndDelete(id)
        res.status(200).json({msg:'User deleted successfully'})
    }
    catch(err){
        res.status(500).json({error:err})
    }
}

module.exports = {
    create:create,
    getAll:getAll,
    getOne:getOne,
    update:update,
    deleteUser:deleteUser
}
