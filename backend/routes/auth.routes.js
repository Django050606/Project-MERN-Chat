import express from "express";
const router =express.Router();
router.get("/login",(req,res)=>{
    res.send("Logic Routes");
});
export default router;