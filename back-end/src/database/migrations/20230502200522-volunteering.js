module.exports = {
  async up(queryInterface, Sequelize) {
   return queryInterface.createTable('volunteering', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    target_audience: { allowNull: false, type: Sequelize.STRING },
    period: { allowNull: false, type: Sequelize.STRING },
    type: { allowNull: false, type: Sequelize.STRING },
   });
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.dropTable('volunteering');
  },
};
