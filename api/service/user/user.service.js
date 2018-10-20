const client = require('../../db/postgres');

module.exports = async function(app) {
  app.get('/api/user', findAllUsers);

  async function findAllUsers(req, res) {
    const allAccounts = await client.query('SELECT * FROM account');
    res.json(allAccounts.rows);
  }
};
