require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const index = require('./routes/index');
const productRoutes = require('./routes/product')
const sellerRoutes = require('./routes/seller')
const offerRoutes = require('./routes/offer')
const reviewRoutes = require('./routes/review')
const userRoutes = require('./routes/user')
const cartRoutes = require('./routes/cart')

const BASE_PATH = process.env.REACT_APP_BASE_PROXY;

const app = express();
app.use(cors());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

mongoose.connect(
    "mongodb+srv://" + process.env.MONGO_USER + ":" + process.env.MONGO_PASSWD +"@cluster0.r0co7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(BASE_PATH, index);
app.use(BASE_PATH +'/product', productRoutes);
app.use(BASE_PATH +'/offer', offerRoutes);
app.use(BASE_PATH +'/review', reviewRoutes);
app.use(BASE_PATH +'/seller', sellerRoutes);
app.use(BASE_PATH +'/user', userRoutes);
app.use(BASE_PATH +'/cart', cartRoutes);

app.get('*', (req, res) => {
  res.sendFile('build/index.html', { root: global });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
