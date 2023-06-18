module.exports = {
  async up(queryInterface, Sequelize) {
   return queryInterface.createTable('blood_bank', {
    cpf_donator: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: Sequelize.STRING,
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      references: { model: 'users', key: 'cpf' },
    },
    blood_type: { allowNull: false, type: Sequelize.STRING },
    first_donation: { allowNull: false, type: Sequelize.DATE },
    last_donation: { allowNull: false, type: Sequelize.DATE },
   });
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.dropTable('blood_bank');
  },
};
