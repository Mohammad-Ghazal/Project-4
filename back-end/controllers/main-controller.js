const express = require('express'); 
//tack what ecxported from Router
const mainRouter = express.Router();


const users = [
{id:1,name:'ghazal',birth:'12/4/1995'},
{id:2,name:'Jozaa',birth:'21/7/1994'},
{id:3,name:'ali',birth:'15/5/1991'},
{id:4,name:'khamil',birth:'22/9/1985'},
{id:5,name:'zara',birth:'10/1/1999'},

]

const getAllUsers=(req,res)=>{
console.log('getAllUsers called')
    //res.json(`users :  ${users}`)
    res.json(users)
}

const addNewUser=(req,res)=>{
    console.log(req.body)

    //req.args.
   const newUser={id:users.length+1,name:req.body.name,birth:req.body.birth}
   users.push(newUser)
        res.json(newUser.name+' is now a user  ')
    }
//add to test
module.exports={getAllUsers,addNewUser};