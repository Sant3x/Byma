const MongoClient = require('mongodb').MongoClient;
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;


var bodyParser = require('body-parser');
const { Collection } = require('mongo');
const { Document } = require('mongoose');
 

const url = "mongodb+srv://admin:123@cluster0.voziwea.mongodb.net/?retryWrites=true&w=majority";
const dbName = 'data1';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  const db = client.db(dbName);
  const collection = db.collection('test') // Replace with your collection name
  

 
  collection.find({}).toArray((err, documents) => {
    if (err) {
      console.error('Error reading from collection:', err);
      return;
   }

    console.log('Documents:', documents);
    client.close();

    app.get ('/',(req,res) => {
      res.send(documents)
  });
});



app.use(express.json())
app.listen(3000);}) 