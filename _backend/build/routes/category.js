"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoryRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _category = require("../services/category");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var categoryRouter = _express.default.Router();

exports.categoryRouter = categoryRouter;
categoryRouter.get('/', function (req, res) {
  var respond = function respond(result) {
    if (!result) {
      return res.status(404).json('Not Found.');
    }

    return res.json(result);
  };

  var handleError = function handleError(error) {
    console.log(error);
    return res.status(500).json('failure..');
  };

  (0, _category.getAllCategories)().then(respond).catch(handleError);
});
categoryRouter.get('/:id([0-9a-fA-F]{24})', function (req, res) {
  var id = req.params.id;

  var respond = function respond(result) {
    if (!result) res.status(404).json('Not Found.');
    return res.json(result);
  };

  var handleError = function handleError(error) {
    console.log(error);
    return res.status(500).json('failure..');
  };

  (0, _category.getCategoryById)(id).then(respond).catch(handleError);
});
categoryRouter.post('/', function (req, res) {
  var category = req.body.category;

  var respond = function respond(result) {
    return res.json('success');
  };

  var handleError = function handleError(error) {
    console.log(error);
    return res.status(500).json('failure..');
  };

  (0, _category.createCategory)(category).then(respond).catch(handleError);
});
categoryRouter.put('/:id([0-9a-fA-F]{24})', function (req, res) {
  var id = req.params.id;
  var category = req.body.category;

  var respond = function respond(result) {
    return res.json('success');
  };

  var handleError = function handleError(error) {
    console.log(error);
    return res.status(500).json('failure..');
  };

  (0, _category.updateCategory)(id, category).then(respond).catch(handleError);
});
categoryRouter.delete('/:id([0-9a-fA-F]{24})', function (req, res) {
  var id = req.params.id;

  var respond = function respond(result) {
    if (!result) res.status(404).json('Not Found.');
    return res.json(result);
  };

  var handleError = function handleError(error) {
    console.log(error);
    return res.status(500).json('failure..');
  };

  (0, _category.deleteCategory)(id).then(respond).catch(handleError);
});