const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/anunx?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6')

async function dbConnect() {
  // Or:
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/anunx?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6')
    console.log('Connected to database!')
  } catch (error) {
    console.log('Connection falied!')
  }


}

// Call the function to connect to the database
export default dbConnect
