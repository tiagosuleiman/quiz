angular.module('quizApp')

   .factory('HttpInterceptor', httpInterceptor)
    .factory('QuizService', quizService);

   function httpInterceptor ($q, $window, $location) {
        console.info("#httpInterceptor");
        return function (promise) {
          var success = function (response) {
            return response;
          };
          var error = function (response) {
            if (response.status === 401) {
              $location.url('/');
            }
            return $q.reject(response);
          };
          return promise.then(success, error);
        };
    }


   function quizService($http) {
        
        var service = {};
        service.query = query;
        service.save = save;
        return service;

         function query() {
            return $http.get(REST_SERVICE_URI.concat('/quiz'));
        }

        function save(questions) {
          console.info("@saveUser#Answers", questions);
          $http({
               method: 'POST',
                url: REST_SERVICE_URI.concat('/quiz/'),
                data: JSON.stringify(questions),
                headers: {
                   'Content-type': 'application/json'
                }
             }); 
        }
    }
