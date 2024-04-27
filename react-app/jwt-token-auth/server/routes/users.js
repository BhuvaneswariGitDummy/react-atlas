const router = require('express').Router()
const {User,validate} = require('../models/user')
const Bcrypt = require('bcrypt')

router.post('/',async(req,res)=>{
    try{
        const {error} = validate(req.body)
        if(error)
            return res.status(400).send({message:error.details[0].message})

        const user = await User.findOne({email:req.body.email})
        if(user)
            return res.status(409).send({message:'User with given Email already exists'})
        
        const salt = await Bcrypt.genSalt(Number(process.env.SALT))
        const hashpassword = await Bcrypt.hash(req.body.password,salt)

        await new User({...req.body,password:hashpassword}).save();
        res.status(200).send('User Created Successfully')
    }
    catch(error){
        res.status(500).send({message: 'Internal Server Error'})
    }
})

module.exports = router;