var mongoose = require('mongoose')
   ,autoIncrement = require('mongoose-auto-increment')
   ,connection = mongoose.createConnection("mongodb://localhost/quizdb");

autoIncrement.initialize(connection);

var answerSchema = new mongoose.Schema({});

	answerSchema.plugin(autoIncrement.plugin, {
	    model: 'Answer',
	    field: '_id',
	    startAt: 1,
	    incrementBy: 1
	});	

exports.Answer = connection.model('Answer', answerSchema);

//module.exports = mongoose.model("Answer", answerSchema);