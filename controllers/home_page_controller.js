// const db=require('./config/mongoose');

const TodoList = require("../models/todo");

// const TodoList=require('./models/todo');
let list=[
    {
        name:'Break Fast',
        date:'May 20 2020',
        catogory:'Personal'
    },
    {
        name:'Lunch',
        date:'June 20 2020',
        catogory:'Work'
    },
    {
        name:'Dinner',
        date:'June 20 2020',
        catogory:'Personal'
    },
    {
        name:'Party',
        date:'June 20 2020',
        catogory:'Web Dev'
    },
    {
        name:'Coding',
        date:'June 20 2020',
        catogory:'Personal'
    },
    {
        name:'Backend Project',
        date:'June 20 2020',
        catogory:'Front End'
    },
    
]

module.exports.home=function(req,res){
    TodoList.find({}, function(err,todolist)
    {
        if(err){
            console.log('Error from the todolist while fetching todolist');
            return;
        }
        return res.render('home',{
            name: 'To-Do List',
            list:todolist
        });
    });
    
}
module.exports.listofTodo=function(req,res){
    console.log(req.body);
    TodoList.create({
        name:req.body.name,
        date:req.body.date,
        catogory:req.body.catogory
    },function(err,conList){
        if(err)
        {
            console.log("it is not working bro");
        }
        console.log('************',conList);
        return res.redirect('back');

    });
    

    // list.push(temp);
    // console.log(list);
    // return res.redirect('/');
};

module.exports.deleteTodo=function(req,res){
    // console.log(req.query.name);
    let id=req.query.id;
    TodoList.findByIdAndDelete(id,function(err){
        if(err){
            console.log('Error in Deletion operation');
            return;
        }
        return res.redirect('back');
    });
}
