//tack what ecxported from express library
const express = require('express'); 
//tack what ecxported from Router
const mainRouter = express.Router();
const {getAllUsers,addNewUser}=require('../controllers/main-controller')

//to call server >> you have to ::
//http://localhost:PORT/enpoint path
mainRouter.get('/', (req,res) => {
  res.json('wellcome to ghzal project four');
});


mainRouter.get('/getAllUsers',(req,res)=>{
getAllUsers(req,res);

})
mainRouter.post('/addNewUser',(req,res)=>{
  addNewUser(req,res);
  
  })
module.exports = mainRouter;