const express=require('express')
const userRoute=express.Router()
let User=require('./user.model')
//registration
userRoute.route('/register/').post(function(req,res){
    console.log('hellow from registration form')
    let user=new User(req.body)
        user.save().then(user=>{
            res.status(200).json({'user':'user added successfully'+user});

        }).catch(err=>{
            res.status(400).send('unable to save to save database')
        })
    }
)
//login
userRoute.route
('/login/:userid/:userpass').get(function(req,res){
    var uid=req.params.userid;
    var upass=req.params.userpass;
    User.find({$and:[{'userid':uid},
{'userpass':upass}]}).then(user=>{
    console.log(user)
    res.send(user)
})
.catch(err=>{
    res.status(400).send('Data not found something went wrong')
})
})
module.exports=userRoute