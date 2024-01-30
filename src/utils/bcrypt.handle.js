import bcrypt from "bcrypt";

const encrypt = async (pass) => {
  const passwordHash = await bcrypt.hash(pass, 8);
  return passwordHash;
};

const verified = async (pass, passHash) => {
  const isCorrect = await bcrypt.compare(pass, passHash);
  return isCorrect;
};

export { encrypt, verified };
