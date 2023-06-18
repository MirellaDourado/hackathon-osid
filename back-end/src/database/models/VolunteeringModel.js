module.exports = (sequelize, DataTypes) => {
  const Volunteering = sequelize.define('Volunteering', {
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    targetAudience: { type: DataTypes.STRING },
    period: { type: DataTypes.STRING },
    type: { type: DataTypes.STRING }
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'volunteering',
  });

  return Volunteering;
};
