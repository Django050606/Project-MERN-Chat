import mongoose from 'mongoose';
const connectToMongoDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDbf");

    }catch(error){
        console.log("Error connecting to MongoDbf",error.message);
    }
};
export default connectToMongoDB;