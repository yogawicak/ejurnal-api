var express = require('express');
var path = require('path');
var logger = require('morgan');
const volleyball = require('volleyball')
const jurnalRouter = require('./routes/jurnalRouter')

var app = express();

app.use(volleyball)
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.send('hello world')
});

app.use('/api/jurnal',jurnalRouter)

module.exports = app;
