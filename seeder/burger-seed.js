'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Burgers', [
      { burger_name: 'Wimpy Venison Cheeseburger', devoured: 0, createdAt: new Date(), updatedAt: new Date() },
      { burger_name: 'Wimpy Gator Bacon Cheeseburger', devoured: 0, createdAt: new Date(), updatedAt: new Date() },
      { burger_name: 'Wimpy Kangaroo Cheeseburger', devoured: 0, createdAt: new Date(), updatedAt: new Date() },
      { burger_name: 'Wimpy Emu Bacon Cheeseburger', devoured: 0, createdAt: new Date(), updatedAt: new Date() },
      { burger_name: 'Wimpy Rabbit Cheeseburger', devoured: 0, createdAt: new Date(), updatedAt: new Date() }
    ],  {});
  },

  down: function (queryInterface, Sequelize) {
     return queryInterface.bulkDelete('Burgers', null, {truncate : true});
  }
};