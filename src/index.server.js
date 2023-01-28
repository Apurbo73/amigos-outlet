const express = require('express');
const app = express();
const env = require('dotenv');
const { MongoClient, ServerApiVersion } = require('mongodb');

const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

//routes
const userRoutes = require('./routes/user');

env.config();
//mongoDb Connection


const uri = "mongodb+srv://<username>:<password>@cluster0.iksmdxf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("amigos-outlet").collection("users");
  // perform actions on the collection object
  console.log('okay DataBase is Connected');
  client.close();
});




app.use(bodyParser());

// app.get('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'Hellow From Server Side'
//     });
// });

// app.post('/data', (req, res, next) => {
//     res.status(200).json({
//         message: req.body
//     });
// });


app.use('/api',userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
});