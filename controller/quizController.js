var db = require('../model/quiz.js');
var dbAnswer = require('../model/answer.js');

exports.list = function(callback){
	db.Quiz.find({}, function(error, quiz) {
		if(error) {
			callback({error: 'Não foi possivel retornar o questionário'});
		} else {
			callback(quiz);
		}
	});
};

exports.quiz = function(id, callback) {
	db.Quiz.findById(id, function(error, quiz) {
		if(error) {
			callback({error: 'Não foi possivel retornar o questionário'});
		} else {
			callback(quiz);
		}
	});
};


exports.listAnswers = function(callback){
	dbAnswer.Answer.find({}, function(error, quiz) {
		if(error) {
			callback({error: 'Não foi possivel retornar o questionário'});
		} else {
			callback(quiz);
		}
	});
};


exports.update = function(id, name, validity, callback) {
	db.Quiz.findById(id, function(error, quiz) {
		if(name) 
			quiz.name = name;
		if(validity) 
			quiz.validity = validity;
		quiz.save(function(error, quiz) {
			if(error) {
				callback({error: 'Não foi possivel salvar o questionário'});
			} else {
				callback(quiz);
			}
		});
	});
};


exports.delete = function(id, callback) {
	db.Quiz.findById(id, function(error, quiz) {
		if(error) {
			callback({error: 'Não foi possivel retornar o questionário'});
		} else {
			quiz.remove(function(error) {
				if(!error) {
					callback({response: 'questionário excluido com sucesso'});
				}
			});
		}
	});
};
