/**
* ContactsApp Module
*
* A simple contacts app
*/
(function(){


angular.module('ContactsApp', ['ngRoute', 'ngResource', 'ngMessages'])
	.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
			$routeProvider
				.when('/contacts', {
					controller: 'ListController',
					templateUrl: 'views/list.html'
				})
				.when('/contact/new', {
					controller: 'NewController',
					templateUrl: 'views/new.html'
				})
				.when('/contact/:id', {
					controller: 'SingleController',
					templateUrl: 'views/single.html'
				})
				.when('/settings', {
					controller: 'SettingsController',
					templateUrl: 'views/settings.html'
				})
				.otherwise({redirectTo: '/contacts'})
			$locationProvider.html5Mode(true);
	}])

//End of the selfie function
})();