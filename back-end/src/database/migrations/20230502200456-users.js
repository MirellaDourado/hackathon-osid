module.exports = {
  async up(queryInterface, Sequelize) {
   return queryInterface.createTable('users', {
    cpf: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: Sequelize.STRING,
      unique: true
    },
    first_name: { allowNull: false, type: Sequelize.STRING },
    last_name: { allowNull: false, type: Sequelize.STRING },
    gender: { allowNull: false, type: Sequelize.STRING },
    password: { allowNull: false, type: Sequelize.STRING },
    role: { allowNull: false, type: Sequelize.STRING },
    birthday: { allowNull: true, type: Sequelize.DATE },
    dulce_coins: { allowNull: false, type: Sequelize.INTEGER, defaultValue: 100 }
   });
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.dropTable('users');
  },
};
