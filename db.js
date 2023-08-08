const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URL);
       console.log(`database connected successfully `)
    } catch (error) {
        console.log(`error occur` ,error)
    }
}
module.exports = connectDB;