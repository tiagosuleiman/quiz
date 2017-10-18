var app = require('./config/app_config.js')
   ,quizController = require('./controller/quizController.js')
   ,bodyParser = require('body-parser')
   ,dbAnswer = require('./model/answer.js')
   ,validator = require('validator')
   ,MongoClient = require('mongodb').MongoClient;

//Conexão com MongoDB para o POST
MongoClient.connect('mongodb://localhost:27017/quizdb', function (err, database) {
   if (err) 
   	throw err
   else
   {
	db = database;
	console.log('Connected to MongoDB');
	//Start app only after connection is ready
	app.listen(3001);
   }
 });

app.use(bodyParser.json());

app.set('json spaces', 2);

app.get('/', function(req, res) {
	res.end('Servidor ON!');
});

app.get('/quiz', function(req, res) {
	quizController.list(function(resp) {
		res.json(resp);
	});
});

app.get('/quiz/:id', function(req, res) {
	var id = validator.trim(validator.escape(req.param('id')));
	
	quizController.quiz(id, function(resp) {
		res.json(resp);
	});
});


app.post('/quiz', function(req, res) {
   // Insert JSON straight into MongoDB
  db.collection('answers').insertMany(req.body, function (err, result) {
      if (err)
         res.send('Error');
      else
        res.send('Success');
  });
});

app.get('/answers', function(req, res) {
	quizController.listAnswers(function(resp) {
		res.json(resp);
	});
});


/*app.put('/quiz', function(req, res) {
	var id = validator.trim(validator.escape(req.param('id')))
	   ,name = validator.trim(validator.escape(req.param('name')))
	   ,validity = req.param('validity');
	  
	quizController.update(id, name, validity, function(resp) {
		res.json(resp);
	});
});

app.delete('/quiz/:id', function(req, res) {
	var id = validator.trim(validator.escape(req.param('id')));

	quizController.delete(id, function(resp) {
		res.json(resp);
	});
});
*/
