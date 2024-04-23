import mongoose from 'mongoose';
const messageSchema=new mongoose.Schema({
    
    sernderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    message:{
        type:String,
        required:true
    }

},
{timestamps:true}
);//Cool stuff to see the time of creation of each object ;)

const Message = mongoose.model("Message",messageSchema);

export default Message;