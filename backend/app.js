
var express = require('express');
var path = require('path');
var logger = require('morgan');
require('dotenv').config()
const mongoose = require('mongoose');

var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/userRouter');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/admin', require('./src/routes/adminRouter'));
app.use('/commonuser', require('./src/routes/commonUserRouter'));
  
app.get('*', (req, res) => {
    res.send(`<h1> Enter right url </h1>`)
})

// Database connection 
const url = process.env.MONGO_URL;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true ,
    useFindAndModify: false 
    })
    .then(() => {
        console.log('mongodb server connected...')
        const port = process.env.PORT || 5000;
        app.listen(port, () => console.log(`server listening on port ${port}`))
})
    .catch(err => console.log(err))


