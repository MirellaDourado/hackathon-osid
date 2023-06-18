const { Sales, Product, User } = require('../database/models');

const getDetailsById = (saleId) => Sales.findOne({
  where: { id: saleId },
  include: [
    { model: Product, as: 'products' },
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: User, as: 'seller', attributes: { exclude: ['password'] } },
  ],
  attributes: { exclude: ['userId', 'sellerId'] },
});

const getAll = () => Sales.findAll();

const getAllById = (id) => Sales.findAll({ where: { sellerId: id } });

const create = (sale) => Sales.create(
  { 
    userId: sale.userId,
    sellerId: sale.sellerId,
    totalPrice: sale.totalPrice,
    deliveryAddress: sale.deliveryAddress,
    deliveryNumber: sale.deliveryNumber,
    saleDate: (new Date()),
    status: sale.status,
  },
);

const putDetails = ({
  id, userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status,
}) => Sales.update(
  { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status },
  { where: { id } },
);

module.exports = {
  getAll,
  getAllById,
  create,
  getDetailsById,
  putDetails,
};
