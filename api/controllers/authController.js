import User from "../Models/userModel.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.send({
      status: 400,
      message: "All fields are required",
    });
  }

  const isEmailExist = await User.findOne({ email });

  if (isEmailExist) {
    return res.send({
      status: 400,
      message: "Email already exist",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 8);
  try {
    const userObj = new User({
      username,
      email,
      password: hashedPassword,
    });
    await userObj.save();
    return res.send({
      status: 201,
      message: "User created successfully",
    });
  } catch (error) {
    return res.send({
      status: 500,
      message: "Database error",
      error: error,
    });
  }
};
