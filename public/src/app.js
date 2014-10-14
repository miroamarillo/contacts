/**
* ContactsApp Module
*
* A simple contacts app
*/
(function(){


angular.module('ContactsApp', ['ngRoute'])
	.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
			$routeProvider
				.when('/contacts', {
					controller: 'ListController',
					templateUrl: 'views/list.html'
				});
			$locationProvider.html5Mode(true);
	}])

//End of the selfie function
})();