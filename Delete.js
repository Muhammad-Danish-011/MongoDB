const {MongoClient}=require('mongodb');
const url = 'mongodb://localhost:27017' ;
const database ='local';
const client  = new MongoClient (url);

async function DeleteData() {
    try {
      await client.connect();
      const db = client.db(database);
      const collection = db.collection('data');
      
      const result = await collection.deleteOne({ name: 'Person 1' });
      console.warn(result);
  
      // Re-query the collection to see the remaining data
      const remainingData = await collection.find({}).toArray();
      console.warn(remainingData);
    } catch (error) {
      console.error('Error deleting data:', error);
    } finally {
      await client.close();
    }
  }
DeleteData();