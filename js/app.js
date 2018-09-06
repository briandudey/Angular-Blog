'use strict';

var angularOneApp = angular.module('angularOneApp', [
	'ngRoute',
	'angularOneControllers'
]);

angularOneApp.config([
	'$routeProvider',
	'$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'partials/main.html',
				controller: 'MainCtrl'
			})
			.when('/show', {
				templateUrl: 'partials/show.html',
				controller: 'ShowCtrl'
			});
		$locationProvider.html5Mode('false').hashPrefix('!');
	}
]);
