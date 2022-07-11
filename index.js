const express=require('express');
const app=express();
const port=8000;

//setting up the Server
app.use('/',require('./routes'));

//settin up the Views and view engine
 app.set('view engine','ejs');
 app.set('views','./views');



app.listen(port,function(err){
    if(err){
        console.log(`Error in Running in the server: ${err}`);
    }
    console.log(`Server is running on the port: ${port}`);
});