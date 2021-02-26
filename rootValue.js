const db = require('./db');

const rootValue = () => {
    return {
      users: db.getAllUsers()
    };
};

module.exports = rootValue;