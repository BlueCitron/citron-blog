"use strict";

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _index = _interopRequireDefault(require("./routes/index"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

var visit = _interopRequireWildcard(require("./services/visit"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var port = 9090;
app.use((0, _morgan.default)('dev'));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _cookieParser.default)());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use(_bodyParser.default.json());
app.use((0, _cors.default)());
app.use('/', _index.default); // open the server

app.listen(port, function () {
  console.log("Server started listening on port ".concat(port));
});

_mongoose.default.connect('mongodb://49.247.204.250/bluecitron', {
  useNewUrlParser: true
}).then(function () {
  console.log('MongoDB Connected -> 49.247.204.250/bluecitron');
}).catch(console.error);

visit.getToday();