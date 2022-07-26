const express=require('express');

const app=express();
const db=require('./config/mongoose');
const TodoList=require('./models/todo');
const port=8000;

app.use(express.urlencoded());



//setting up the Server
app.use('/',require('./routes'));
app.use(express.static(__dirname+'/assets'))

//settin up the Views and view engine
 app.set('view engine','ejs');
 app.set('views','./views');
 


app.listen(port,function(err){
    if(err){
        console.log(`Error in Running in the server: ${err}`);
    }
    console.log(`Server is running on the port: ${port}`);
});