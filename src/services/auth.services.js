import UserModel from "../models/userModel.js";
import RolModel from "../models/rolModel.js"; // Importa el modelo de roles
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
    // Verifica si el rol proporcionado existe en la tabla de roles
    const rolExistente = await RolModel.findByPk(ID_ROL);

    if (!rolExistente) {
      // El rol no existe, devuelve un error
      return { error: "ROLE_NOT_FOUND" };
    }

    // Verifica si ya existe un usuario con el mismo correo electrónico
    const checkIs = await UserModel.findOne({ where: { CORREO } });
    if (checkIs) {
      return { error: "ALREADY_USER" };
    }

    // Encripta la contraseña antes de guardarla en la base de datos
    const passHash = await encrypt(CONTRASEÑA);

    // Crea un nuevo usuario con el ID_ROL proporcionado
    const newUser = await UserModel.create({
      NOMBRE_USUARIO,
      APELLIDO_USUARIO,
      TIPO_DOCUMENTO,
      DOCUMENTO,
      CORREO,
      CONTRASEÑA: passHash,
      ID_ROL,
    });

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
