var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var jwt        = require('jsonwebtoken');
// Secret key for jwt
var secretkey  = 'MySuperSecretKey';
// Database in the cloud
var mongoose   = require('mongoose');
mongoose.connect('mongodb://root:123@ds113700.mlab.com:13700/blog', function(err){
  if (err) {
    console.error('error!' + err);
  }
});
// Bodyparser to read json post data
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
// Load mongodb model schema
var Post = require('./model/Post');
var User = require('./model/User');

// Definindo rotas
var router = express.Router();
app.use('/', express.static(__dirname + '/'));

// Middleware: run in all requests
router.use(function(req, res, next) {
  console.warn(req.method + " " + 
    req.url + " with " + JSON.stringify(req.body))
  next();
});

// Middleware: auth
var auth = function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, secretkey, function(err, decoded) {
      if (err) {
        return res.status(403).send({
          success: false,
          message: 'Access denied'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'Access denied'
    });
  }
}

// Simple GET / test
router.get('/', function(req, res) {
  res.json({message: 'Hello World!'});
});

// Users route
router.route('/users')
.get(auth, function (req, res){
  User.find(function (err, users){
    if (err)
      res.send(err)

    res.json(users)
  })
})
.post(function (req, res) {
  var user = new User();
  user.name = req.body.name;
  user.login = req.body.login;
  user.password = req.body.password;

  user.save(function(err) {
    if (err)
      res.send(err)

    res.json(user)
  });
});

// Login route
router.route('/login')
.post(function (req, res){
  if (req.body.isNew) {
    
  }
})


// Register router
app.use('/api', router);

// Start server
var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log('Listen: ' + port);
});
