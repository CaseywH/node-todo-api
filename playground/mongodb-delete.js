// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //delete many
  // db.collection('Todos').deleteMany({text: 'wash car'})
  // .then((result) => {
  //   console.log(result);
  // })
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'wash car'})
  // .then((result) => {
  //   console.log(result);
  // })
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({text: 'wash car', completed: true})
  // .then((result) => {
  //   console.log(result);
  // })

  //use deleteMany delete all with name casey
  // db.collection('Users').deleteMany({name: 'Casey'})
  // .then((result) => {
  //   console.log(result);
  // })

  //findOneAndDelete by _if
  db.collection('Users').findOneAndDelete({_id: new ObjectID("5a8495673914f8647cec40d7")})
  .then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  })
  // db.close();
});
