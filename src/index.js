//without a config file 
// const doenv = require('dotenv/config');
// console.log(process.env.MY_SECRET);

const {token} = require('./config')
console.log(`Your port is ${token}`);
console.log("HELLO")

const express = require('express') ;
const cors = require('cors')
// I can create routes once i have created my applications instance 
const app = express();
//using cors 

app.use(cors());

//every express app ia series of routing and middleware function calls .

app.get('/',(res,req) => 
    res.send("Hello world!")
);

app.listen(3000, () => 
console.log(`Example app istening on port 300`))

//two kinds of middleware function calls 
// application level middileware




//router-level middleware