angular.module('quiz.service', []);
angular.module('quiz.directive', []);
angular.module('quiz.filter', []);

angular.module('quiz', ['quiz.service','quiz.directive','quiz.filter']);

'use strict';

var quiz_app = function ($scope){
 
  $scope.questions = [
    {"question" : "What is 2*4?", "answers" : [
      {"ans" : "8", "correct" : true},
      {"ans" : "6", "correct" : false},
      {"ans" : "24", "correct" : false}
      ]},
    {"question" : "What is 6+7?", "answers" : [
      {"ans" : "12", "correct" : false},
      {"ans" : "13", "correct" : true},
      {"ans" : "3", "correct" : false}
      ]},
    {"question" : "How many pennies are in $10.00?", "answers" : [
      {"ans" : "1,000.", "correct" : true},
      {"ans" : "10,000.", "correct" : false},
      {"ans" : "Many", "correct" : false}
      ]},
    {"question": "What is 5-2?", "answers": [
      {"ans" : "2", "correct" : false},
      {"ans" : "1", "correct": false},
      {"ans" : "3", "correct": true}
      ]}
  	];

  $scope.answers = {};

  $scope.correct = 0;

  $scope.numCorrect = function (){

    $scope.correct = 0;

    var total = $scope.questions.length;

    for (var i = 0; i < total ; i++){
      var answers = $scope.questions[i].answers;

      $scope.questions[i].isCorrect = false;
      $scope.questions[i].userSelected = $scope.answers[i];
      for (var j = 0; j < answers.length; j++) {
        answers[j].selected = "";

        if ($scope.questions[i].userSelected === answers[j].ans && answers[j].correct === true) {
          $scope.questions[i].isCorrect = true;
          answers[j].selected = "true";
          $scope.correct++;
        } else if ($scope.questions[i].userSelected === answers[j].ans && answers[j].correct===false){
          answers[j].selected = "false";
        }
      }
    }
    
  };

  $scope.addQuestion = function (){
  	$("#addQ").click(function (){
        $("ul").append("<li>New Question</li>");
    });
  }

  $scope.removeQuestion = function (){

  }
};
