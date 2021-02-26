const db = require('./db');

const rootValue = () => {
    return {
      authors: db.getAllAuthors(),
      users: db.getAllUsers()
    };
};

module.exports = rootValue;