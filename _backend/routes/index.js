var express = require('express');
var router = express.Router();

var PostService = require('../service/post.js');
var CategoryService = require('../service/category.js');

router.get('/init', function(req, res, next) {

});

router.get('/posts', function(req, res, next) {
  PostService.test();
});

router.post('/posts', function(req, res, next) {

});

router.put('/posts/:id', function(req, res, next) {

});

router.delete('/posts/:id', function(req, res, next) {

});
/******************************************************************************************************************/
router.get('/categorys', function(req, res, next) {

});

router.post('/categorys', function(req, res, next) {

});

router.delete('/categorys/:id', function(req, res, next) {

});

module.exports = router;
