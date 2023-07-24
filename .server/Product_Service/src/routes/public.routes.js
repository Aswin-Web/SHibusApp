const express = require("express");
const { postAProduct } = require("../controllers/admin.controller");

const router = express.Router()

/*
ROUTE: /products
DESC : To get All the Food items
TYPE : PUBLIC
*/
router.post("/products", postAProduct);

module.exports = router;
