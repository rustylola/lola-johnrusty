import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    // get the auth token from cookies
    const token = req.cookies["auth_token"];
    if(!token){
        return res.staus(401).json({ message:"Unauthorized" });
    }

    try {
        // Verify the token and extract the payload
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userId = decoded.userId;
        next();

    } catch (error) {
        return res.status(401).json({ message:"Unauthorized" });
    }

}

export default verifyToken