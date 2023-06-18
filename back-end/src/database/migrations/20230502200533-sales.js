module.exports = {
  async up(queryInterface, Sequelize) {
   return queryInterface.createTable('sales', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    user_cpf: {
      allowNull: false,
      type: Sequelize.STRING,
      foreingnKey: true,
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      references: {
        model: 'users',
        key: 'cpf',
      },
    },
    total_price: { allowNull: false, type: Sequelize.DECIMAL(10, 2) },
   });
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.dropTable('sales');
  },
};
