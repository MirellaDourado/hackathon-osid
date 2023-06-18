module.exports = (sequelize, DataTypes) => {
  const Voluntary = sequelize.define('Voluntary', {
    voluntaryCpf: { type: DataTypes.STRING, primaryKey: true, autoIncrement: false },
    volunteerTypeId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: false },
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'volunteers',
  });

  Voluntary.associate = (models) => {
    Voluntary.belongsTo(models.User, {
      foreignKey: {
        name: 'voluntaryCpf',
        allowNull: false,
      },
      targetKey: 'cpf',
      as: 'user',
    });

    Voluntary.belongsTo(models.Volunteering, {
      foreignKey: {
        name: 'volunteerTypeId',
        allowNull: false,
      },
      targetKey: 'id',
      as: 'volunteering',
    });
  };

  return Voluntary;
};
