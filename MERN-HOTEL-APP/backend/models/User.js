import mongoose from "mongoose"; // Importing Mongoose for database schema and model creation
import bcrypt from "bcryptjs"; // Importing bcrypt for hashing passwords

// Define a Mongoose schema for the User model
const userSchema = new mongoose.Schema({
  // The email field, which must be unique and is required
  email: { type: String, required: true, unique: true },
  
  // The password field, which is required (will be hashed before saving)
  password: { type: String, required: true },
  
  // The first name of the user, required
  firstName: { type: String, required: true },
  
  // The last name of the user, required
  lastName: { type: String, required: true },
});

// Pre-save middleware to hash the password before saving the user document
userSchema.pre("save", async function (next) {
  // Check if the password field has been modified
  if (this.isModified("password")) {
    // Hash the password with a salt factor of 8
    this.password = await bcrypt.hash(this.password, 8);
  }
  // Proceed to the next middleware or save operation
  next();
});

// Create a User model based on the schema
const User = mongoose.model("User", userSchema);

// Export the User model for use in other parts of the application
export default User;
