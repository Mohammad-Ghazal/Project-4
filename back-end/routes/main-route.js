//tack what ecxported from express library
const express = require('express'); 
//tack what ecxported from Router
const mainRouter = express.Router();


//to call server >> you have to ::
//http://localhost:PORT/enpoint path
mainRouter.get('/', (req, res) => {
  res.json('HELLO WORLD');
});

module.exports = mainRouter;