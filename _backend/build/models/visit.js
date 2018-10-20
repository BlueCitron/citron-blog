"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Visit = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose.default.Schema;
var VisitSchema = new Schema({
  total: {
    type: Number,
    default: 0
  },
  visit: {
    type: Date,
    of: [Schema.Types.ObjectId]
  }
});

var Visit = _mongoose.default.model('visit', VisitSchema);

exports.Visit = Visit;