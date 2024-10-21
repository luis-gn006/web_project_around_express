const fs = require('fs/promises');
const path = require('path');

const usersFile = path.join(__dirname, '..', 'data', 'users.json');

const doesUserExist = async (req, res, next) => {
  try {
    const data = await fs.readFile(usersFile, 'utf-8');
    const users = JSON.parse(data);
    const user = users.find((u) => u._id === req.params.id);
    if (!user) {
      return res.status(404).send({ error: 'ID de usuario no encontrado' });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(500).send({err: 'Error al leer el archivo de usuarios'});
  }
};

module.exports = doesUserExist;
