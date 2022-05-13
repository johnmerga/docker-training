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
      req.session.user = newUser;
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
    if (req.session.user) {
      return res.status(200).json(req.session.user);
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: "incorrect username or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    req.session.user = user;
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// signOut
const signOut = (req, res) => {
  req.session.destroy(() => {
    res.status(200).json({ msg: "logged out" });
  });
};

export { signUp, signIn, signOut };
