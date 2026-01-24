import User from "../Models/user.js";
import connectDB from "../db.js";
import dotenv from "dotenv/config";
import EncryptPassword from "../Utils/EncryptPassword.js";

const adminSeeder = async () => {
  await connectDB();

  const ifAdminExists = await User.findOne({ role: "SuperAdmin" });

  if (ifAdminExists) {
    return console.log("Admin already exists");
  }

  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const role = "SuperAdmin";
  const position = "CEO";
  const name = "kirtan";
  const surname = "bhavsar";

  const hashedPassword = await EncryptPassword(password);

  const admin = new User({
    email,
    password: hashedPassword,
    role,
    position,
    name,
    surname,
  });

  await admin.save();

  return console.log("Admin created successfully");
};

adminSeeder();
