var quizCtrl = function ($scope, $http, helper, QuizService) {
    $scope.quizName = {};
    //Note: Only those configs are functional which is documented at: http://www.codeproject.com/Articles/860024/Quiz-Application-in-AngularJs
    // Others are work in progress.
    $scope.defaultConfig = {
        'allowBack': true,
        'allowReview': true,
        'autoMove': true,  // if true, it will move to next question automatically when answered.
        'duration': 0,  // indicates the time in which quiz needs to be completed. post that, quiz will be automatically submitted. 0 means unlimited.
        'pageSize': 1,
        'requiredAll': true,  // indicates if you must answer all the questions before submitting.
        'richText': false,
        'shuffleQuestions': false,
        'shuffleOptions': false,
        'showClock': false,
        'showPager': true,
        'theme': 'none'
    }
    
      $scope.goTo = function (index) {
          if (index > 0 && index <= $scope.totalItems) {
              $scope.currentPage = index;
              $scope.mode = 'quiz';
          }
      }

    $scope.onSelect = function (question, option) {
        if (question.QuestionTypeId == 1) {
            question.Options.forEach(function (element, index, array) {
                if (element.Id != option.Id) {
                    element.Selected = false;
                } else if(element.Selected = true){
                    question.Answered = element.Id;
                    question.OptionSelected = element.Name;
                }
               });
        }
        if (question.QuestionTypeId == 2) {
              var answers = [],
                  options = [];                  
              question.Options.forEach(function (element, description, index, array) {
                if (element.Selected != true) {
                    element.Selected = false;
                } else if(element.Selected = true && element.Id != 18){
                    answers.push(element.Id);
                    options.push(element.Name);
                    question.Answered = answers;
                    question.OptionSelected = options;
                } else if(element.Selected = true && element.Id == 18){
                      answers.push(element.Id);
                      options.push(element.Name);
                      question.Answered = answers;
                      question.OptionSelected = options;
                      question.DescriptionOther = option.description;
                  }
            });
        }
        if (question.QuestionTypeId == 3) {
            question.Options.forEach(function (response, index, array) {
                if (option.response != undefined) {
                    option.Selected = true;
                    question.Answered = option.response;
                   }else if (option.response == undefined) {
                    option.Selected = false;
                   }
               });
        }

        if ($scope.config.autoMove == true && question.QuestionTypeId == 1 && $scope.currentPage < $scope.totalItems)
            $scope.currentPage++;
    }


     $scope.onSubmit = function(Answer){
        var answers = [];
        if(validateQuiz(Answer)){              
        $scope.questions.forEach(function (q, index) {
            answers.push({ 'Date': new Date(), 'Name': $scope.fullName, 'Unit': $scope.unit, 'QuizId': $scope.quizName, 'Quiz': $scope.quiz.Name, 'QuestionId': q.Id, 'Question': q.Name, 'Answered': q.Answered, 'Option': q.OptionSelected, 'Outros': q.DescriptionOther});
        }); 
         $http.post(REST_SERVICE_URI.concat('/quiz'), JSON.stringify(answers)).success(function (data, status) {
            swal("Sucesso!", "Questionário enviado.", "success");
        });
          
          $scope.mode = 'result';        
          delete $scope.answers;
        }else{
          swal("Atenção!", "Responda todas as questões antes de enviar.", "warning");
        }
    }


    function validateQuiz (Answer){
     var validity = true; 
     $scope.questions.forEach(function (q, index) {             
             if (!q.hasOwnProperty('Answered')){
                 validity = false;               
             }        
     });
        return validity;
        console.groupEnd();
     }
     
    $scope.pageCount = function () {
        return Math.ceil($scope.questions.length / $scope.itemsPerPage);
    };

    //If you wish, you may create a separate factory or service to call loadQuiz. To keep things simple, i have kept it within controller.
    $scope.loadQuiz = function (quizName) {
        //$http.get(file)
        //console.info('quizName', quizName);
          $http.get(REST_SERVICE_URI.concat('/quiz/').concat(quizName), JSON.stringify(quizName))
         .then(function (res) {
             $scope.quiz = res.data.quiz;
             $scope.config = helper.extend({}, $scope.defaultConfig, res.data.config);
             $scope.questions = $scope.config.shuffleQuestions ? helper.shuffle(res.data.questions) : res.data.questions;
             $scope.totalItems = $scope.questions.length;
             $scope.itemsPerPage = $scope.config.pageSize;
             $scope.currentPage = 1;
             $scope.mode = 'quiz';
            // console.info('data#', res);
             if($scope.config.shuffleOptions)
                $scope.shuffleOptions();

             $scope.$watch('currentPage + itemsPerPage', function () {
                 var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                   end = begin + $scope.itemsPerPage;

                 $scope.filteredQuestions = $scope.questions.slice(begin, end);
             });
         });
    }
    
    $scope.shuffleOptions = function(){
        $scope.questions.forEach(function (question) {
           question.Options = helper.shuffle(question.Options);
        });
    }
    
    $scope.loadQuiz($scope.quizName);

    $scope.isAnswered = function (index) {
        var answered = 'Não Respondida';
       
        $scope.questions[index].Options.forEach(function (element, index, array) {
            if (element.Selected == true) {
                answered = 'Respondida';
                return false;
            }
           }
        );
        return answered;
    };

    $scope.isCorrect = function (question) {
        var result = 'correct';
        question.Options.forEach(function (option, index, array) {
            if (helper.toBool(option.Selected) != option.IsAnswer) {
                result = 'wrong';
                return false;
            }
        });
        return result;
    };
}


app.directive('onlyLetters', function () {
     return {
     require: 'ngModel',
     link: function(scope, element, attrs, modelCtrl) {
       modelCtrl.$parsers.push(function (inputValue) {
           if (inputValue == undefined) return ''
           var transformedInput = inputValue.replace(/[^[a-zA-Z ]/g, '');
           if (transformedInput!=inputValue) {
              modelCtrl.$setViewValue(transformedInput);
              modelCtrl.$render();
           }

           return transformedInput;
       });
     }
   };
})


quizCtrl.$inject = ['$scope', '$http', 'helperService'];
app.controller('quizCtrl', quizCtrl);
