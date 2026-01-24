import bcrypt from "bcrypt";
import dotenv from "dotenv/config";

const EncryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);

  // const encryption_key = process.env.ENCRYPTION_KEY;

  const encryptedPassword = bcrypt.hash(password, salt);

  return encryptedPassword;
};

export default EncryptPassword;
