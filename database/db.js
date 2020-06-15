const spicedPg = require("spiced-pg");
let db = spicedPg(
  process.env.DATABASE_URL ||
    "postgres:postgres:postgres@localhost:5432/betches-hp"
);

exports.getUserById = id => db.query("SELECT * FROM users WHERE id = $1", [id]);
exports.getAllUsers = id => db.query("SELECT * FROM users");
