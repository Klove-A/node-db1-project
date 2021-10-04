const db = require("../../data/db-config");

const getAll = () => {
  return db("foo-table");
}

const getById = id => {
  return db("foo-table")
    .where("id", id)
    .first()
}

const create = account => {
  
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
