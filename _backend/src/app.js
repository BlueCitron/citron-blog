import "@babel/polyfill";
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';
import indexRouter from './routes/index'
import mongoose from 'mongoose'

const app = express();
const port = 8080;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', indexRouter);

// open the server
app.listen(port, () => {
  console.log(`Server started listening on port ${port}`)
})

mongoose.connect('mongodb://49.247.204.250/bluecitron', {useNewUrlParser: true})
  .then(() => {
    console.log('MongoDB Connected -> 49.247.204.250/bluecitron')
  })
  .catch(console.error);
