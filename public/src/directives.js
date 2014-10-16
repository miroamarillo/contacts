(function () {
	angular.module('ContactsApp')
		.directive('formField', ['$timeout', 'FieldTypes', function($timeout, FieldTypes){
			// Runs during compile
			return {
				restrict: 'EA',
				templateUrl: 'views/form-field.html',
				replace: true,
				scope: {
					record: '=',
					field: '@',
					live: '@',
					required: '@'
				},
				link: function($scope, element, attr) {
					console.log("I'm in");
					$scope.types = FieldTypes;

					$scope.remove = function(field){
						delete $scope.record[field];
						$scope.blurUpdate();
					}

					$scope.blurUpdate = function(){
						if($scope.live !== 'false'){
							$scope.record.$update(function(updatedRecord){
								$scope.record = updatedRecord;
							});
						}
					}

					var saveTimeout;
					$scope.update = function(){
						$timeout.cancel(saveTimeout);
						saveTimeout = $timeout($scope.blurUpdate, 1000);
					}
				}
			};
		}])

})();