module.exports = {
  async up(queryInterface, Sequelize) {
   return queryInterface.createTable('volunteers', {
    voluntaryCpf: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING,
      foreingnKey: true,
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      references: { model: 'users', key: 'cpf' },
    },
    volunteerTypeId: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      foreingnKey: true,
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      references: { model: 'volunteering', key: 'id' },
    },
   });
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.dropTable('volunteers');
  },
};
