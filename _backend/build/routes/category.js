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
    return res.json(result);
  };

  var handleError = function handleError(error) {
    console.log(error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });
  };

  (0, _category.getAllCategories)().then(respond).catch(handleError);
});
categoryRouter.post('/', function (req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      createdBy = _req$body.createdBy;

  if (!name || !createdBy) {
    return res.status(409).json({
      success: false,
      message: '필수 입력 항목을 모두 입력해주세요.'
    });
  }

  var respond = function respond(result) {
    return res.json({
      success: true,
      name: name,
      createdBy: createdBy
    });
  };

  var handleError = function handleError(error) {
    console.log(error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });
  };

  (0, _category.createCategory)({
    name: name,
    createdBy: createdBy
  }).then(respond).catch(handleError);
});
categoryRouter.put('/:_id([0-9a-fA-F]{24})', function (req, res) {
  var _id = req.params._id;
  var name = req.body.name;

  var respond = function respond(result) {
    return res.json({
      success: true,
      name: name
    });
  };

  var handleError = function handleError(error) {
    console.log(error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });
  };

  (0, _category.updateCategory)(_id, {
    name: name
  }).then(respond).catch(handleError);
});
categoryRouter.delete('/:_id([0-9a-fA-F]{24})', function (req, res) {
  var _id = req.params._id;

  var respond = function respond(result) {
    var n = result.n,
        ok = result.ok;

    if (n === 0) {
      res.status(404).json({
        success: false,
        message: '카테고리를 찾을 수 없어요. 아이디를 확인해 주세요.'
      });
    }

    return res.json({
      success: true,
      _id: _id
    });
  };

  var handleError = function handleError(error) {
    console.log(error);
    res.status(error.status || 500).json({
      success: false,
      message: error.message
    });
  };

  (0, _category.deleteCategory)(_id).then(respond).catch(handleError);
});