var express = require('express');
var bcrypt = require('bcrypt');

const port = 1997

app.use(function (req, res, next) {
    res.send('Hello World')
  });
  app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  });


  app.use(express.static(path.join(__dirname, 'public')))



  

  app.get('/', function (req, res) {
    res.send('Welcome')
  });



app.get('/', function (req, res) {
    res.send('hello world')
  });

  app.listen(port, () => {
      console.log('listening on port ' + port + 'Happy Hacking!')
  });
