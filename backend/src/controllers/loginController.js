const connection = require('../../base');
const oracledb = require('oracledb');
const bcrypt = require('bcrypt');

module.exports.login = async (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM client WHERE email = :email';

  try {
    const conn = await connection();
    const result = await conn.execute(query, [username], {
      outFormat: oracledb.OUT_FORMAT_OBJECT
    });

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Email o contraseña inválidos' });
    }

    const user = result.rows[0];

    // Verificar contraseña
    const match = await bcrypt.compare(password, user.PASSWORD);
    if (!match) {
      return res.status(401).json({ message: 'Email o contraseña inválidos' });
    }

    // Excluir la contraseña de la respuesta
    const { PASSWORD, ...safeUser } = user;
    await conn.close();

    res.status(200).json({ message: 'Login exitoso', user: safeUser });
  } catch (error) {
    console.error('Error al intentar loguear:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
