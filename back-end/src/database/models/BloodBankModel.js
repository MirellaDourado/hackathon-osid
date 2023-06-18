module.exports = (sequelize, DataTypes) => {
  const BloodBank = sequelize.define('BloodBank', {
    cpfDonator: { autoIncrement: false, primaryKey: true, type: DataTypes.STRING },
    bloodType: { type: DataTypes.STRING },
  }, {
    timestamps: true,
    createdAt: 'firstDonation',
    updatedAt: 'lastDonation',
    underscored: true,
    tableName: 'blood_bank',
  });

  BloodBank.associate = (models) => {
    BloodBank.belongsTo(models.User, {
      foreignKey: {
        name: 'cpfDonator',
        allowNull: false,
      },
      targetKey: 'cpf',
      as: 'user',
    });
  }

  return BloodBank;
};
