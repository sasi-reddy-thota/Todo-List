const express=require('express');
const router=express.Router();
// const db=require('./config/mongoose');
// const todoList=require('./models/todo');

const homePage=require('../controllers/home_page_controller');
const testPage=require('../controllers/testing_controller');



console.log('Express Working fine in routes');


router.get('/',homePage.home);
router.post('/listofTodo',homePage.listofTodo);
router.get('/delete-todo',homePage.deleteTodo);
router.get('/newpage',testPage.test);

module.exports=router;
