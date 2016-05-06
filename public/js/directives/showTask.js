//var myApp = angular.module('myApp', []);
myApp.directive('showTask', function(){
	return {
  	restrict: 'E',
  	scope: {
    	task: '='
    },
  	templateUrl:'js/directives/showTask.html'
  };
})