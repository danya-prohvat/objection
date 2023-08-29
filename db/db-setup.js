const knex = require("knex");
const knexfile = require("./knexfile");
const { Model } = require("objection");

function setupDb() {
  const bd = knex(knexfile.development);
  Model.knex(bd);
}

module.exports = setupDb;
