// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
  all: (cb) => {
    orm.selectAll((res) => cb(res));
  },
  insert: (newBurger, cb) => {
    orm.insertOne(newBurger, (res) => cb(res));
  },
  update: (id, condition, cb) => {
    //  FOR DEBUGGING
    // console.log('burger.js update', {id});
    // console.log('burger.js update', {condition});
    orm.updateOne(id, condition, (res) => cb(res));
  },
  delete: (id, cb) => {
    orm.deleteOne(id, (res) => cb(res));
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
