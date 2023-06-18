const { User } = require('../database/models');

const findByCpf = async (cpf) => {
  const result = await User.findByPk(cpf);
  return result;
};

const findOne = async (cpf, password) => {
  const result = await User.findOne(cpf, password);
  return result;
};

const findByRole = async (role) => {
  const result = await User.findAll({ where: { role } });
  return result;
};

const getAll = () => User.findAll();

const create = (user) => User.create(user);

const remove = (cpf) => User.destroy({ where: { cpf } });

module.exports = {
  getAll,
  create,
  findByRole,
  findByCpf,
  remove,
  findOne,
};
