const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'local';
const client = new MongoClient(url);

const updateData = async () => {
  try {
    await client.connect();
    const db = client.db(database);
    const collection = db.collection('data');

    const result = await collection.updateMany(
      { name: 'Person 21' },
      { $set: { name: 'new' } }
    );

    console.warn(result);
  } catch (error) {
    console.error('Error updating data:', error);
  } finally {
    await client.close();
  }
};

updateData();
