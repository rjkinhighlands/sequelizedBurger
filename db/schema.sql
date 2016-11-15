--- LOCAL SETUP

CREATE DATABASE wimpyburgers_db;

` sequelize db:migrate `
` sequelize db:seed:all `

--- SEQUELIZED INDEX.js and CONFIG.json

` sequelize init `

--- BURGERS.js and MIGRATE

` sequelize model:create --name Burgers --attributes "burger_name:string devoured:boolean" `

--- MIGRATE MySQL DB

` sequelize db:migrate `

--- SEEDS

` sequelize seed:create --name burgers-seed `

--- RUN DATABASE

` sequelize db:seed:all `