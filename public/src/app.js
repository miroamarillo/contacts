/**
* ContactsApp Module
*
* A simple contacts app
*/
(function(){


angular.module('ContactsApp', ['ngRoute', 'ngResource'])
	.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
			$routeProvider
				.when('/contacts', {
					controller: 'ListController',
					templateUrl: 'views/list.html'
				})
				.when('/contac/new', {
					controller: 'NewController',
					templateUrl: 'views/new.html'
				});
			$locationProvider.html5Mode(true);
	}])

//End of the selfie function
})();