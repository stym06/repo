(function(){
	angular
		.module("turtleFacts")
		.controller("listCtrl", ListController);

        ListController.$inject=['quizMetrics','DataService'];

		function ListController(quizMetrics,DataService){
			var vm=this;
            vm.quizMetrics=quizMetrics;
			vm.data=DataService.turtlesData;
			vm.activeTurtle={};
			vm.changeActiveTurtle=changeActiveTurtle;
			vm.search="";
			vm.activateQuiz=activateQuiz;

			function activateQuiz(){
				quizMetrics.changeState(true);
			}
			function changeActiveTurtle(index){
				vm.activeTurtle=index;
			}
		}



})();