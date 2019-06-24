const dotenv= require('dotenv');
dotenv.config();
module.exports = {
    token: process.env.MY_SECRET,
};