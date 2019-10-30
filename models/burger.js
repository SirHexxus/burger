// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
    all: (cb) => {
        orm.selectAll((res) => {
            cb(res);
        });
    },
    insert: (newBurger, cb) => {
        orm.create(newBurger, (res) => {
            cb(res);
        });
    },
    update: (burgerName, condition, cb) => {
        orm.update(burgerName, condition, (res) => {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
