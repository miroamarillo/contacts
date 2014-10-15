(function () {
	angular.module('ContactsApp')
		.factory('Contact', ['$resource', function($resource){
			return $resource('/api/contact/:id', {id: '@id' },
				{'update': { method: 'PUT'}
			});
		}]);
})();