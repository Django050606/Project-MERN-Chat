import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';
import messageRoutes from "./routes/message.routes.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
dotenv.config();

app.use (express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use (cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

// app.get("/", (req,res) =>{
//     //root route http://localhost:5000/
//     res.send("Hello World!!!!!!!!!");
// });



app.listen(PORT,() =>{
    connectToMongoDB();
    console.log('Server Runnig on port'+PORT+'')
});
