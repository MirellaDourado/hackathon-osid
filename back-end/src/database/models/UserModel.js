module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    cpf: { type: DataTypes.STRING, primaryKey: true, autoIncrement: false },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    gender: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING },
    birthday: { type: DataTypes.DATE },
    dulceCoins: { type: DataTypes.INTEGER, defaultValue: 100 }
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'users',
  });

  User.associate = (models) => {
    User.hasMany(
      models.Sales,
      { foreignKey: 'userId', as: 'UserSales' },
      { foreignKey: 'sellerId', as: 'Saller' },
    );
  };

  return User;
};
