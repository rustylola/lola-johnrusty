import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName:String,
    lastName:{
        type:String,
        default:'lastName',
    },
    email:String,
    password:String,
    location:{
        type:String,
        default:'my city',
    },
    role:{
        type:String,
        enum: ['user', 'admin'],
        default: 'user',
    }
});

export default mongoose.model('User', UserSchema);