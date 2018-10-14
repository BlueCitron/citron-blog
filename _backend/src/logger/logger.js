import DailyRotateFile from 'winston-daily-rotate-file'
import { createLogger, format, transports, stream } from 'winston'
const { combine, timestamp, label, printf } = format

// 로그 포맷
const myFormat = printf(info => {
  if(info.level == 'error')
    return `${new Date().toLocaleTimeString()} ${info.stack}`
  else {
    return `${new Date().toLocaleTimeString()} ${info.level}: ${info.message}`;
  }
});

const enumerateErrorFormat = format(info => {
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

export const logger = createLogger({
  level: 'silly',
  format: combine(
    timestamp(),
    myFormat,
    enumerateErrorFormat()
  ),
  exitOnError: false,
  transports: [
    new transports.Console({
      level: 'silly',
      colorize: true,
      showLevel: true,
      handleExceptions: true
    }),
    new DailyRotateFile({
      level: 'silly',
      filename: 'log/citron-blog_%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      colorize: true,
      handleExceptions: true
    })
  ],
})

logger.stream = {
  write: (message, encoding) => {
    logger.info(message)
  }
}

// console.info 추가
console.info = logger.info
console.error = logger.error
