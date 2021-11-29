"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProduct = exports.saveProducts = exports.getProducts = exports.getProduct = exports.deleteProduct = exports.countProducts = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _index = require("../database/index");

var getProducts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _index.getConnection)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query(_index.queries.getProducts);

          case 6:
            result = _context.sent;
            res.json(result.recordset);
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0.message);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getProducts = getProducts;

var saveProducts = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, name, description, quantity, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, name = _req$body.name, description = _req$body.description, quantity = _req$body.quantity;

            if (!(name == null || description == null)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", res.status(422).json({
              msg: 'Bad request. Please fill all fields'
            }));

          case 4:
            quantity = quantity ? quantity : 0;
            _context2.next = 7;
            return (0, _index.getConnection)();

          case 7:
            pool = _context2.sent;
            _context2.next = 10;
            return pool.request().input('name', _index.sql.VarChar, name).input('description', _index.sql.Text, description).input('quantity', _index.sql.SmallInt, quantity).query(_index.queries.saveProduct);

          case 10:
            res.status(202).json({
              name: name,
              description: description,
              quantity: quantity
            });
            _context2.next = 17;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            res.status(500);
            res.send(_context2.t0.message);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));

  return function saveProducts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.saveProducts = saveProducts;

var getProduct = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return (0, _index.getConnection)();

          case 4:
            pool = _context3.sent;
            _context3.next = 7;
            return pool.request().input('id', id).query(_index.queries.getProduct);

          case 7:
            result = _context3.sent;
            res.json(result.recordset[0] || {});
            _context3.next = 15;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            res.status(500);
            res.send(_context3.t0.message);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function getProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getProduct = getProduct;

var deleteProduct = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return (0, _index.getConnection)();

          case 4:
            pool = _context4.sent;
            _context4.next = 7;
            return pool.request().input('id', id).query(_index.queries.deleteProduct);

          case 7:
            result = _context4.sent;
            res.json(result);
            _context4.next = 15;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            res.status(500);
            res.send(_context4.t0.message);

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 11]]);
  }));

  return function deleteProduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteProduct = deleteProduct;

var updateProduct = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _req$body2, name, description, quantity, pool;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description, quantity = _req$body2.quantity;

            if (!(name == null || description == null || quantity == null)) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return", res.status(422).json({
              msg: 'Error validator fields. Please send all fields.'
            }));

          case 5:
            _context5.next = 7;
            return (0, _index.getConnection)();

          case 7:
            pool = _context5.sent;
            _context5.next = 10;
            return pool.request().input('id', id).input('name', _index.sql.VarChar, name).input('description', _index.sql.Text, description).input('quantity', _index.sql.SmallInt, quantity).query(_index.queries.updateProduct);

          case 10:
            res.json({
              name: name,
              description: description,
              quantity: quantity
            });
            _context5.next = 17;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            res.status(500);
            res.send(_context5.t0.message);

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 13]]);
  }));

  return function updateProduct(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateProduct = updateProduct;

var countProducts = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var pool, response;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return (0, _index.getConnection)();

          case 3:
            pool = _context6.sent;
            _context6.next = 6;
            return pool.request().query(_index.queries.countProduct);

          case 6:
            response = _context6.sent;
            res.json(response.recordset[0]['']);
            _context6.next = 14;
            break;

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            res.status(500);
            res.send(_context6.t0.message);

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 10]]);
  }));

  return function countProducts(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.countProducts = countProducts;