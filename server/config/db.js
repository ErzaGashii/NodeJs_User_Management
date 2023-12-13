const mongoose = require('mongoose');
// përfaqëson një konfigurim që çaktivizon rezhimin strikt për parametrat e pyetjeve në MongoDB
mongoose.set('strictQuery', false);

const connectDB = async()=> {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}



module.exports = connectDB;