const mongoose=require('mongoose');

const todoListSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    catogory:{
        type:String,
        require:true
    }

});

const TodoList=mongoose.model('TodoList',todoListSchema);

module.exports=TodoList;