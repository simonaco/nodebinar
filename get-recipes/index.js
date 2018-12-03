const MongoClient = require('mongodb').MongoClient;
const auth = {
  user: process.env.user,
  password: process.env.password
};
let db = null;
const loadDB = async () => {
  if (db) {
    return db;
  }
  try {
    const client = await MongoClient.connect(
      process.env.url,
      {
        auth: auth
      }
    );
    db = client.db('admin');
  } catch (error) {
    context.log(`Error code: ${error.code} message: ${error.message}`);
    throw new Error(error.message);
  }
  return db;
};
module.exports = async function(context, req) {
  const database = await loadDB();
  let recipes = await database
    .collection('Recipes')
    .find()
    .toArray();
  context.res = {
    body: { items: recipes }
  };
};
