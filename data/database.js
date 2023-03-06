const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectTodobase() {
  const client = await MongoClient.connect('mongodb://localhost:27017');
  database = client.db('eintory');
}

function getDb() {
  if(!database) {
    throw new Error('you must connect first!')
  }

  return database;
}

module.exports = {
  connectTodobase: connectTodobase,
  getDb: getDb
}