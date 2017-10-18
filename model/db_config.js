var db_string= 'mongodb://localhost:27017/quizdb'
   ,mongoose = require('mongoose')
   ,db = mongoose.connection.openUri(db_string)
   ,autoIncrement = require('mongoose-auto-increment')
   ,relationship = require('mongoose-relationship');

autoIncrement.initialize(db);
db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));
db.once('open', function() {

var quizSchema =  mongoose.Schema({
		Name: String,   
   		questions: [{
        	Name: String,
        	QuestionType_id: Number,
        	componentType: String,
        Options: [{
            Name: String, 
            Question_id: Number
        	}]
	}]
	});

	quizSchema.plugin(autoIncrement.plugin, {
	    model: 'Quiz',
	    field: '_id',
	    startAt: 1,
	    incrementBy: 1
	});


var answerSchema =  mongoose.Schema({
		fullname: String,
		unit: String,
		dateAnswer: Date
	});

	answerSchema.plugin(autoIncrement.plugin, {
	    model: 'QuestionType',
	    field: '_id',
	    startAt: 1,
	    incrementBy: 1
	});	

exports.Quiz = connection.model('Quiz', quizSchema);
exports.Answer = connection.model('Answer', answerSchema);
