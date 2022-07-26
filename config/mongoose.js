const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/todolist');

let db=mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to db'));

db.on('open',function(){
    console.log('Yes, it is connected to the database');
})
