const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'local';
const client = new MongoClient(url);

async function insertData() {
  try {
    await client.connect();
    const db = client.db(database);
    const collection = db.collection('data');

    const objectsToInsert = [];

    for (let i = 1; i <= 1000; i++) {
      objectsToInsert.push({
        "name": `Person ${i}`,
        "age": Math.floor(Math.random() * 50) + 20, // Random age between 20 and 69
        "email": `person${i}@example.com`,
        "address": `${i} Street, City ${i}, Country ${i}`,
        "hobbies": ["Hobby1", "Hobby2", "Hobby3"] // You can replace these with actual hobbies
      });
    }

    const result = await collection.insertMany(objectsToInsert);

    if (result.acknowledged) {
      console.log("Data inserted successfully.");
    }
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    await client.close();
  }
}

insertData();
