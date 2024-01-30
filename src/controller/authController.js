import * as AuthService from "../services/auth.services.js";

const registerCtrl = async (req, res) => {
  const userData = req.body;

  try {
    const responseUser = await AuthService.registerNewUser(userData);
    res.json(responseUser);
  } catch (error) {
    console.error("Error in register controller:", error);

    if (error.error === "ALREADY_USER") {
      res.status(400).json({ error: "User already exists" });
    } else {
      res.status(500).send("Internal Server Error");
    }
  }
};

const loginCtrl = async (req, res) => {
  const { CORREO, CONTRASEÑA } = req.body;

  try {
    const responseUser = await AuthService.loginUser({ CORREO, CONTRASEÑA });

    if (responseUser.error === "NOT_FOUND_USER") {
      res.status(404).json({ error: "User not found" });
    } else if (responseUser.error === "CONTRASEÑA_INCORRECT") {
      res.status(403).json({ error: "Incorrect CONTRASEÑA" });
    } else {
      res.json(responseUser);
    }
  } catch (error) {
    console.error("Error in login controller:", error);
    res.status(500).send("Internal Server Error");
  }
};

export { loginCtrl, registerCtrl };
