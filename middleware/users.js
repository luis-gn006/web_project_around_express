const User = require('../models/user.js');

const doesUserExist = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ error: 'ID de usuario no encontrado' });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(500).send({err: 'Recurso solicitado no encontrado'});
  }
};

module.exports = doesUserExist;
