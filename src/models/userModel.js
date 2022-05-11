import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 3,
    required: [true, "Please add a name"],
    unique: true,
  },

  password: {
    type: String,
    minlength: 6,
    required: [true, "Please add a password"],
  },
});

const User = mongoose.model('User', userSchema);

export default User;