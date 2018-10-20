"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = void 0;

var _winstonDailyRotateFile = _interopRequireDefault(require("winston-daily-rotate-file"));

var _winston = require("winston");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var combine = _winston.format.combine,
    timestamp = _winston.format.timestamp,
    label = _winston.format.label,
    printf = _winston.format.printf; // 로그 포맷

var myFormat = printf(function (info) {
  if (info.level == 'error') return "".concat(new Date().toLocaleTimeString(), " ").concat(info.stack);else {
    return "".concat(new Date().toLocaleTimeString(), " ").concat(info.level, ": ").concat(info.message);
  }
});
var enumerateErrorFormat = (0, _winston.format)(function (info) {
  if (info.message instanceof Error) {
    info.message = Object.assign({
      message: info.message.message,
      stack: info.message.stack
    }, info.message);
  }

  if (info instanceof Error) {
    return Object.assign({
      message: info.message,
      stack: info.stack
    }, info);
  }

  return info;
});
var logger = (0, _winston.createLogger)({
  level: 'silly',
  format: combine(timestamp(), myFormat, enumerateErrorFormat()),
  exitOnError: false,
  transports: [new _winston.transports.Console({
    level: 'silly',
    colorize: true,
    showLevel: true,
    handleExceptions: true
  }), new _winstonDailyRotateFile.default({
    level: 'silly',
    filename: 'log/citron-blog_%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    colorize: true,
    handleExceptions: true
  })]
});
exports.logger = logger;
logger.stream = {
  write: function write(message, encoding) {
    logger.info(message);
  } // console.info 추가

};
console.info = logger.info;
console.error = logger.error;