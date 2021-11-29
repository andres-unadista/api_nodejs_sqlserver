"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _product = require("../controllers/product.controller");

var router = (0, _express.Router)();
router.get('/products', _product.getProducts);
router.get('/products/count', _product.countProducts);
router.post('/products', _product.saveProducts);
router.put('/products/:id', _product.updateProduct);
router["delete"]('/products/:id', _product.deleteProduct);
router.get('/products/:id', _product.getProduct);
var _default = router;
exports["default"] = _default;