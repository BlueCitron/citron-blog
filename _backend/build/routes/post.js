"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _post = require("../services/post");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postRouter = _express.default.Router(); // postRouter.get('/:category([0-9a-fA-F]{24})', function(req, res) {
//
//   const { category } = req.params;
//
//   const respond = (result) => {
//     if(!result)
//       return res.status(404).json('Not Found..');
//     return res.json(result);
//   }
//
//   const handdleError = (error) => {
//     console.log(error);
//     return res.status(500).json('failure..');
//   }
//
//   getAllPostsOfCategory(category)
//     .then(respond)
//     .catch(handdleError);
//
// });


exports.postRouter = postRouter;
postRouter.get('/:category([0-9a-fA-F]{24})', function (req, res) {
  var category = req.params.category;
  var _req$query = req.query,
      page = _req$query.page,
      perPage = _req$query.perPage;

  var respond = function respond(result) {
    if (!result) return res.status(404).json('Not Found..');
    return res.json(result);
  };

  var handdleError = function handdleError(error) {
    console.log(error);
    return res.status(500).json('failure..');
  };

  (0, _post.getPostsOfCategoryWithPaging)(category, page, perPage).then(respond).catch(handdleError);
});
postRouter.post('/', function (req, res) {
  var post = req.body.post;
  console.log('Insert Post..', post);

  var respond = function respond(result) {
    return res.json('success..');
  };

  var handdleError = function handdleError(error) {
    console.log(error);
    return res.status(500).json('failure..');
  };

  (0, _post.createPost)(post).then(respond).catch(handdleError);
});
postRouter.put('/:id([0-9a-fA-F]{24})', function (req, res) {
  var id = req.params.id;
  var post = req.body.post;

  var respond = function respond(result) {
    return res.json('success..');
  };

  var handdleError = function handdleError(error) {
    console.log(error);
    return res.status(500).json('failure..');
  };

  (0, _post.updatePost)(id, post).then(respond).catch(handdleError);
});
postRouter.delete('/:id([0-9a-fA-F]{24})', function (req, res) {
  var id = req.params.id;

  var respond = function respond(result) {
    return res.json('success..');
  };

  var handdleError = function handdleError(error) {
    console.log(error);
    return res.status(500).json('failure..');
  };

  (0, _post.deletePost)(id).then(respond).catch(handdleError);
});