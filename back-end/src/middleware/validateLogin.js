const { findOne } = require('../services/UserService');

const validateLogin = async (req, res, next) => {
  const { cpf, email, password } = req.body;

  if (!email || !password) return res.status(400)
      .json({ message: 'Some required fields are missing' });

  const user = await findOne(email, name);

  if (!user) return res.status(404).json({ message: 'Not Found' });

  req.data = user;
  return next();
};

module.exports = {
  validateLogin,
};
