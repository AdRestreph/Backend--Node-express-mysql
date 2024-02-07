import UserModel from "../models/userModel.js";
import RolModel from "../models/rolModel.js";
import { encrypt, verified } from "../utils/bcrypt.handle.js";

const registerNewUser = async ({
  NOMBRE_USUARIO,
  APELLIDO_USUARIO,
  TIPO_DOCUMENTO,
  DOCUMENTO,
  CORREO,
  CONTRASEÑA,
  ID_ROL,
}) => {
  try {
    const checkIs = await UserModel.findOne({ where: { CORREO } });
    if (checkIs) {
      return { error: "ALREADY_USER" };
    }

    const passHash = await encrypt(CONTRASEÑA);

    const newUser = await UserModel.create({
      NOMBRE_USUARIO,
      APELLIDO_USUARIO,
      TIPO_DOCUMENTO,
      DOCUMENTO,
      CORREO,
      CONTRASEÑA: passHash,
      ID_ROL: 2,
    });

    const rolExistente = await RolModel.findByPk(newUser.ID_ROL);
    if (!rolExistente) {
      return { error: "ROLE_NOT_FOUND" };
    }

    return newUser;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

const loginUser = async ({ CORREO, CONTRASEÑA }) => {
  try {
    const checkIs = await UserModel.findOne({ where: { CORREO } });
    if (!checkIs) {
      return { error: "NOT_FOUND_USER" };
    }

    const CONTRASEÑAHash = checkIs.CONTRASEÑA;
    const isCorrect = await verified(CONTRASEÑA, CONTRASEÑAHash);

    if (!isCorrect) {
      return { error: "PASSWORD_INCORRECT" };
    }

    const data = {
      user: checkIs,
    };
    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export { registerNewUser, loginUser };
