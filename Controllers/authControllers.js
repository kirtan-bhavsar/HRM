import User from "../Models/user.js";
import EncryptPassword from "../Utils/EncryptPassword.js";

const registerUser = async (req, res) => {
  const userExists = await User.findOne({ email: req.body.email });

  if (userExists) {
    return res
      .status(400)
      .json({ message: "User with same email already exists" });
  }

  let user = {
    email: req.body.email,
    password: await EncryptPassword(req.body.password),
    name: req.body.name,
    surname: req.body.surname,
    position: req.body.position,
    role: req.body.role,
  };

  if (
    email.trim() ||
    password.trim() ||
    name.trim() ||
    surname.trim() ||
    position.trim() ||
    role.trim()
  ) {
    return res
      .status(400)
      .json({ message: "Please provide all the necessary information" });
  }

  await user.save();

  return res
    .status(200)
    .json({ user, message: "User registered successfully" });
};

export { registerUser };
