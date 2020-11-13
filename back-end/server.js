//tack what ecxported from express library
const express = require('express'); 
//const cors = require('cors');
require('dotenv').config();
//tack what ecxported from Router
const mainRouter = require('./routes/main-route');


const db = require('./db');

const app = express(); //run express i think (instantiation)

// app.use(cors());
app.use(express.json());//read req body
app.use(mainRouter);//use main router for any comming reqs

const PORT = 5000 || process.env.PORT;
//method that let server lunch on a PORT
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
