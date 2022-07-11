const express=require('express');
const router=express.Router();

const homePage=require('../controllers/home_page_controller');

console.log('Express Working fine in routes');

router.get('/',homePage.home);

module.exports=router;
