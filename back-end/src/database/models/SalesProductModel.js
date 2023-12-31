// eslint-disable-next-line max-lines-per-function
module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    productId: { type: DataTypes.INTEGER, primaryKey: true },
    saleId: { type: DataTypes.INTEGER, primaryKey: true },
    quantity: { type: DataTypes.INTEGER },
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'sales_products',
  });

  SalesProduct.associate = (models) => {
    models.SalesProduct.belongsToMany(models.Product, {
      as: 'products',
      through: SalesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.SalesProduct.belongsToMany(models.Sales, {
      as: 'sales',
      through: SalesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  };

  return SalesProduct;
};
