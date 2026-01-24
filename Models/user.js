import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
  },
  position: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["HR", "SuperAdmin", "CXO", "Manager", "TL", "Empolyee"],
    required: true,
  },
});

const User = mongoose.model("user", userSchema);

export default User;
