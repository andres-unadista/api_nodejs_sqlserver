"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
var queries = {
  getProducts: 'SELECT * FROM products',
  saveProduct: 'INSERT INTO products (name, description, quantity) VALUES(@name, @description, @quantity)',
  deleteProduct: 'DELETE FROM products WHERE id=@id',
  getProduct: 'SELECT * FROM products WHERE id = @id',
  updateProduct: 'UPDATE products SET name = @name, description = @description, quantity = @quantity WHERE id = @id',
  countProduct: 'SELECT COUNT(*) FROM products'
};
exports.queries = queries;