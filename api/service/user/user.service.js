const client = require("../../db/postgres");

module.exports = function(app) {
    app.get("/api/user", findAllUsers);

    function findAllUsers() {
        client.query("SELECT * FROM account").then(res => console.log(res));
    }
}