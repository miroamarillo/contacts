(function () {
	angular.module('ContactsApp')
		.controller('ListController', ['$scope', function($scope){
			$scope.contacts = [];
		}]);
})();