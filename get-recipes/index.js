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
  const client = await MongoClient.connect(
    process.env.url,
    {
      auth: auth
    }
  );
  db = client.db('admin');
  return db;
};
module.exports = async function(context) {
  try {
    const database = await loadDB();
    let recipes = await database
      .collection('Recipes')
      .find()
      .toArray();
    context.res = {
      body: { items: recipes }
    };
  } catch (error) {
    context.log(`Error code: ${error.code} message: ${error.message}`);
    context.res = {
      status: 500,
      body: { message: 'An error has occured, please try again later' }
    };
  }
};
