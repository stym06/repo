(function(){
	angular
		.module("turtleFacts")
		.controller("quizCtrl",QuizController);

		QuizController.$inject=['quizMetrics','DataService'];
		function QuizController(quizMetrics,DataService)
		{
			var vm=this;
			vm.quizMetrics=quizMetrics;
			vm.DataService=DataService;
			vm.activeQuestion=0;
			vm.questionAnswered=questionAnswered;
			vm.setActiveQuestion=setActiveQuestion;

			function setActiveQuestion(){
				var breakOut=false;
				var quizLength=DataService.quizQuestions.length-1;

				while(!breakOut)
				{
					vm.activeQuestion=vm.activeQuestion<quizLength?++vm.activeQuestion:0;
					if(DataService.quizQuestions[vm.activeQuestion].selected===null{
						breakOut=true;
					}
		)
				}
			}
			var numQuestionAnswered=0;

			var quizLength=DataService.quizQuestions.length;

			function questionAnswered(){
				if(DataService.quizQuestions[vm.activeQuestion].selected!==null)
				{
					numQuestionAnswered++;
					if(numQuestionAnswered>=quizLength)
					{
						//finalize the quiz
					}
				}

				vm.setActiveQuestion();
			}
		}
})();