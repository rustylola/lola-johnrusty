import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  // Get the auth token from cookies
  const token = req.cookies["auth_token"];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Verify the token and extract the payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decoded)
    req.userId = decoded.userId; // Assuming the payload contains a `userId` field
    console.log(req.userId)
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default verifyToken;
