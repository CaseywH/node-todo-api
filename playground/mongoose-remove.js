const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove remove all documents
// Todo.remove({}).then((result) => {
//   console.log(result);
// })

// .findOneAndRemove

// .findByIdAndRemove

Todo.findOneAndRemove({_id: '5a8ba580ff7dcc9f32e84a6d'}).then((todo) => {
  
})

Todo.findByIdAndRemove('5a8ba580ff7dcc9f32e84a6d').then((todo) => {
  console.log(todo);
})
