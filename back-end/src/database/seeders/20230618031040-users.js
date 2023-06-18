module.exports = {
  async up(queryInterface) {
   return queryInterface.bulkInsert('users',
   [
    {
      cpf: '000.000.000-09',
      first_name: 'App',
      last_name: 'Admin',
      gender: '-',
      password: 'a4c86edecc5aee06eff8fdeda69e0d04',
      role: 'admin',
    },
    {
      cpf: '000.000.000-08',
      first_name: 'Fulana',
      last_name: 'Pereira',
      gender: 'F',
      password: '3c28d2b0881bf46457a853e0b07531c6',
      role: 'user',
    },
    {
      cpf: '000.000.000-79',
      first_name: 'Cicrano',
      last_name: 'Silva',
      gender: 'M',
      password: '1c37466c159755ce1fa181bd247cb925',
      role: 'employee',
    },
   ], {});
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
