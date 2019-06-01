var express = require('express');
var bcrypt = require('bcrypt');


const app = express();
const port = process.env.PORT || 1997

app.use(function (req, res, next) {
    res.send('Hello World')
  });
  app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  });




  app.get('/', function (req, res) {
    res.send('Welcome to thesis MVP')
  });

  app.listen(port, () => {
      console.log('listening on port ' + port + 'Happy Hacking!')
  });
