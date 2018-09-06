'use strict';

var angularOneControllers = angular.module('angularOneControllers', []);
angularOneControllers.controller('MainCtrl', [
	'$scope',
	'$location',
	'$http',
	function MainCtrl($scope, $location, $http) {
		$scope.message = 'Hello World';
	}
]);
angularOneControllers.controller('ShowCtrl', [
	'$scope',
	'$location',
	'$http',
	function ShowCtrl($scope, $location, $http) {
		$scope.message = 'Show The World';
	}
]);
