var mongoose = require('mongoose')
   ,autoIncrement = require('mongoose-auto-increment')
   ,connection = mongoose.createConnection("mongodb://localhost/quizdb");

autoIncrement.initialize(connection);

 
var quizSchema =  new mongoose.Schema({
    Name: String,   
    questions: [{
        Name: String,
        QuestionTypeId: Number,
        componentType: String,
        Options: [{
            Name: String, 
            QuestionId: Number
        	}]
	}]
});

	quizSchema.plugin(autoIncrement.plugin, {
	    model: 'Quiz',
	    field: '_id',
	    startAt: 1,
	    incrementBy: 1
	});

exports.Quiz = connection.model('Quiz', quizSchema);
//module.exports = mongoose.model("Quiz", quizSchema);

