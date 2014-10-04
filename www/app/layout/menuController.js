angular.module('footyNoNetApp', ["ionic"])

.controller('MenuController', function($scope, $ionicSideMenuDelegate) {
	$scope.toggleLeft = function(){
		$ionicSideMenuDelegate.toggleLeft();
	};

	$scope.toggleRight = function(){
		$ionicSideMenuDelegate.toggleRight();
	};
});
