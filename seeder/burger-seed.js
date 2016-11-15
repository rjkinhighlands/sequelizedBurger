'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Burgers', [
      { burger_name: 'Wimpy Venison Cheeseburger', devoured: 0, createdAt: new Date(), updatedAt: new Date() },
      { burger_name: 'Wimpy Gator Bacon Cheeseburger', devoured: 0, createdAt: new Date(), updatedAt: new Date() },
      { burger_name: 'Spinach Artichoke Turkey Burger', devoured: 0, createdAt: new Date(), updatedAt: new Date() },
      { burger_name: 'Wimpy Emu Bacon Cheeseburger', devoured: 0, createdAt: new Date(), updatedAt: new Date() }
    ],  {});
  },

  down: function (queryInterface, Sequelize) {
     return queryInterface.bulkDelete('Burgers', null, {truncate : true});
  }
};