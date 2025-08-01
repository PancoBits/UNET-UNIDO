const connection = require('../../base'); // Ajusta el path según tu estructura
const oracledb = require('oracledb');
const bcrypt = require('bcrypt');

module.exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const checkEmailQuery = 'SELECT * FROM client WHERE email = :email';
  const getNextIdQuery = 'SELECT NVL(MAX(client_id), 0) + 1 AS nextId FROM client';
  const insertUserQuery = `
    INSERT INTO client (client_id, name, email, password)
    VALUES (:client_id, :name, :email, :password)
  `;

  try {
    const conn = await connection();

    // 1️⃣ Validar si el email ya existe
    const existingUser = await conn.execute(checkEmailQuery, [email], {
      outFormat: oracledb.OUT_FORMAT_OBJECT
    });

    if (existingUser.rows.length > 0) {
      await conn.close();
      return res.status(409).json({ message: 'Email ya está registrado' });
    }

    // 2️⃣ Obtener el siguiente client_id
    const resultId = await conn.execute(getNextIdQuery, [], {
      outFormat: oracledb.OUT_FORMAT_OBJECT
    });

    const nextClientId = resultId.rows[0].NEXTID;

    // 3️⃣ Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4️⃣ Insertar el nuevo usuario
    await conn.execute(
      insertUserQuery,
      {
        client_id: nextClientId,
        name,
        email,
        password: hashedPassword
      },
      { autoCommit: true }
    );

    await conn.close();
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
