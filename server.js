var express = require('express');

// Create our app
var app = express();
console.log(process.env.PORT);
const PORT = process.env.PORT || 3000;

app.use(function (request, response, next){
  if (request.headers['x-forwarded-proto'] === 'http'){
    next();
  } else {
    response.redirect('http://' + request.hostname + request.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
