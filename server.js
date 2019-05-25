// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const router = require('./router');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.raw({limit: '50mb', type: 'image/jpeg'}));

// app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/upload', router);

app.listen(port, function () {
  console.log('Server is running on PORT',port);
});