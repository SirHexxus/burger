/** @format */

// // *********************************************************************************
// // orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// // *********************************************************************************

// // Dependencies
// // =============================================================
// const connection = require('./connection.js');

// // ORM
// // =============================================================

// const tableName = 'burgers';

// const orm = {
//   // SELECTS all entries from the given table
//   selectAll: (callback) => {
//     const s = `SELECT * FROM ${tableName}`;

//     connection.query(s, (err, result) => {
//       if (err) throw err;
//       callback(result);
//     });
//   },

//   // INSERT INTO given table VALUES (new burger)
//   insertOne: (burger, callback) => {
//     const s = `INSERT INTO ${tableName} (burger_name, devoured) VALUES (?,?)`;

//     connection.query(s, [burger.name, burger.eaten], (err, result) => {
//       if (err) throw err;
//       callback(result);
//     });
//   },

//   // INSERT INTO given table VALUES (new burger)
//   updateOne: (id, eaten, callback) => {
//     const s = `UPDATE ${tableName} SET devoured = ? WHERE id = ?`;
//     //  FOR DEBUGGING
//     // console.log('orm.js updateOne', {id});
//     // console.log('orm.js updateOne',{eaten});
//     connection.query(s, [eaten, id], (err, result) => {
//       if (err) {
//         console.error(err);
//         return result; //.status(500).end()
//       } else if (result.changedRows === 0) {
//         console.info('changed nothing');
//         return result; //.status(404).end()
//       }
//       //  FOR DEBUGGING
//       // console.log('orm.js updateOne', {result});
//       callback(result); //.status(200).end()
//     });
//   },

//   // DELETE FROM given table VALUES (new burger)
//   deleteOne: (id, callback) => {
//     const s = `DELETE FROM ${tableName} WHERE id = ?`;
//     //  FOR DEBUGGING
//     // console.log('orm.js deleteOne', {id});

//     connection.query(s, [id], (err, result) => {
//       console.log(result);
//       if (err) {
//         console.error(err);
//         return result;
//       } else if (result.affectedRows === 0) {
//         console.info('changed nothing');
//         return result;
//       }
//       //  FOR DEBUGGING
//       // console.log('orm.js deleteOne', {result});
//       callback(result);
//     });
//   }
// };

// module.exports = orm;

// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
const connection = require('./connection.js');

// ORM
// =============================================================

const tableName = 'customers';

const orm = {
  // SELECTS all entries from the given table
  selectAll: (callback) => {
    const s = `SELECT * FROM ${tableName}`;

    connection.query(s, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },

  // INSERT INTO given table VALUES (new customer)
  insertOne: (customer, callback) => {
    const s = `INSERT INTO ${tableName} (customer_name, active_customer, business_address, billing_address, contact_name, service_rate) VALUES (?,?,?,?,?,?)`;

    const { name, active, busAddress, billAddress, contact, rate } = customer;

    connection.query(
      s,
      [name, active, busAddress, billAddress, contact, rate],
      (err, result) => {
        if (err) throw err;
        callback(result);
      }
    );
  },

  // INSERT INTO given table VALUES (new customer)
  updateOne: (id, column, value, callback) => {
    const s = `UPDATE ${tableName} SET ${column} = ? WHERE id = ?`;
    //  FOR DEBUGGING
    // console.log('orm.js updateOne', { id });
    // console.log('orm.js updateOne', { column });
    // console.log('orm.js updateOne', { value });
    // console.log('orm.js updateOne', { s });
    connection.query(s, [value, id], (err, result) => {
      if (err) {
        console.error(err);
        return result; //.status(500).end()
      } else if (result.changedRows === 0) {
        console.info('changed nothing');
        return result; //.status(404).end()
      }
      //  FOR DEBUGGING
      // console.log('orm.js updateOne', {result});
      callback(result); //.status(200).end()
    });
  },

  // DELETE FROM given table VALUES (new customer)
  deleteOne: (id, callback) => {
    const s = `DELETE FROM ${tableName} WHERE id = ?`;
    //  FOR DEBUGGING
    // console.log('orm.js deleteOne', {id});

    connection.query(s, [id], (err, result) => {
      console.log(result);
      if (err) {
        console.error(err);
        return result;
      } else if (result.affectedRows === 0) {
        console.info('changed nothing');
        return result;
      }
      //  FOR DEBUGGING
      // console.log('orm.js deleteOne', {result});
      callback(result);
    });
  }
};

module.exports = orm;
