const express=require('express')
const { postAProduct } = require('../controllers/admin.controller')

const router=express.Router()
/*
ROUTE: admin/products
METHOD: POST
DESC : To post a the Food item
TYPE : PRIVATE
*/
router.post('/products',postAProduct)

module.exports=router