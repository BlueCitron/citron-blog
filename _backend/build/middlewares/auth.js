"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authMiddleware = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SECRET = 'YogertStrawberry';

var authMiddleware = function authMiddleware(req, res, next) {
  var token = req.headers['authorization'] || req.headers['x-access-token'] || req.query.token;

  if (!token) {
    res.status(400).json({
      success: false,
      message: "Access token doesn't exists."
    });
  }

  var decode = new Promise(function (resolve, reject) {
    _jsonwebtoken.default.verify(token, SECRET, function (err, decoded) {
      if (err) reject(err);
      resolve(decoded);
    });
  });

  var onError = function onError(error) {
    res.stats(403).json({
      success: false,
      message: error.message
    });
  };

  decode.then(function (decoded) {
    req.decoded = decoded;
    next();
  }).catch(onError);
};

exports.authMiddleware = authMiddleware;