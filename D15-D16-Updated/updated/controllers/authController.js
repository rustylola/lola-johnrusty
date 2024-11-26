import user from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Register a new user
const register = async (req, res) =>{
    try {
        const {name, email, password} = req.body;
        const existingUser = await user.findOne({email});
        // Exist
        if(existingUser) return res.status(400).json({error: 'User already exist'});    
        
        // Not Exist, Create account
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });
        res.status(200).json({message: "Create account successfully."})
    } catch (error) {
        res.status(500).json({error: 'Server Error'});
    }
}

// Login an existing user
const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        
        const userAccount = await user.findOne({email});
        // Not Exist
        if(!userAccount) return res.status(400).json({error: 'User not found'});  
        
        // Is Match
        const isMatch = await bcrypt.compare(password, userAccount.password);
        if(!isMatch) return res.status(400).json({error: 'Invalid credentials'});

        // Generate a JWT (JSON Web Token) with the user's ID as the payload
        const token = jwt.sign({_id:userAccount._id}, process.env.JWT_SECRET,{expiresIn: '1h'});
        res.status(200).json({
            token,
            user: {
                id: userAccount._id,
                name: userAccount.name,
                email: userAccount.email
            }
        });
    } catch (error) {
        res.status(500).json({error: 'Server Error'});
    }
}

export {
    register,
    login
};