 import User from '../models/user.model.js';
 
 
 export const signup=async(req,res)=>{
    try{
      const {fullName,userName,password,confirmPassword,gender}=req.body;
      
      if(password!= confirmPassword){
         return req.status(400).json({error:"Passwords dont match!"})
      }
   
      const user = await User.findOne({username});

      if (user){
         return res.status(400).json({error:"Username already taken!"})
      }
   
      const boyProfilePic='https://avatar.iran.liara.run/public/boy?username=${username}'
      const girlProfilePic='https://avatar.iran.liara.run/public/girl?username=${username}'
   
      const newUser=new User({
         fullName,
         username,
         password,
         gender,
         profilePic: gender === "male" ? boyProfilePic:girlProfilePic

      });
      
   }catch(error){}
 };
 
 export const login=(req,res)=>{
    console.log("loginUser");
 };
 
 export const logout=(req,res)=>{
    console.log("logoutUser");
 };