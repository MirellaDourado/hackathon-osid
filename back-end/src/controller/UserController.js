const md5 = require('md5');
const { userService } = require('../services');
const { generateToken } = require('../auth/authToken');

const login = async (req, res) => {
  const { cpf, password } = req.body;

  const user = await userService.findByCpf(cpf);

  const samePassword = md5(password) === user.password;

  if (!samePassword) return res.status(401).json({ message: 'Not authorized' });

  const token = await generateToken({ cpf, role: user.role });
  return res.status(200).json({ token });
};

const getAll = async (_req, res) => {
  const allUsers = await userService.getAll();

  return res.status(200).json(allUsers);
};

const getByRole = async (req, res) => {
  const { role } = req.body;

  const usersByRole = await userService.findByRole(role);

  return res.status(200).json(usersByRole);
};

const create = async (req, res) => {
  const { name, email, password, role } = req.body;

  const passwordHash = md5(password);

  if (!role) {
    await userService.create({ name, email, password: passwordHash, role: 'user' });
    const token = await generateToken({ name, email });
    return res.status(201).json({ token });
  } 

  await userService.create({ name, email, password: passwordHash, role });

  const token = await generateToken({ name, role: role || 'user' });

  return res.status(201).json({ token });
};

const deleteUser = async (req, res) => {
  const { cpf } = req.params;
  await userService.deleteId(cpf);

  return res.status(200).end();
};

module.exports = {
  getAll,
  login,
  create,
  deleteUser,
  getByRole,
};
