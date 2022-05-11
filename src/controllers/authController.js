import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

// signUp

const signUp = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    } else {
      const newUser = new User(req.body);
      const salt = await bcrypt.genSalt(10);

      newUser.password = await bcrypt.hash(password, salt);
      await newUser.save();
      res.status(201).json(newUser);
    }
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// singIn

const signIn = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ msg: "incorrect username or password" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ msg: "Server error" });
    }
}


export { signUp, signIn };  
