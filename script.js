var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){

	$scope.pics = [""] 
$scope.seturl = function(item){
	$scope.pics.pop();
	$scope.pics.push(item);
	// $scope.link = item;
	}
});