// eslint-disable-next-line max-lines-per-function
module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    userCpf: { type: DataTypes.INTEGER },
    totalPrice: { type: DataTypes.DECIMAL(10, 2) },
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'sales',
  });

  Sales.associate = (models) => {
    Sales.belongsTo(models.User, {
      foreignKey: {
        name: 'userCpf',
        allowNull: false,
      },
      targetKey: 'cpf',
      as: 'user',
    });
  };

  return Sales;
};
