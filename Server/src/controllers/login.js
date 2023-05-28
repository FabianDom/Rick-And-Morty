// CONTROLADOR PARA VALIDAR LA CUENTA EN LA BASE DE DATOS
const { User } = require("../DB_connection");

async function login(req, res) {
  const { email, password } = req.query;
  try {
    if (!email || !password) {
      return res.status(400).send("Faltan datos");
    }
    const userLogin = await User.findOne({ where: { email: email } });
    if (!userLogin) {
      return res.status(404).send("Usuario no encontrado");
    }
    if (userLogin.password !== password) {
      return res.status(403).send("Contraseña incorrecta");
    }
    return res.status(200).json({ access: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = login;
