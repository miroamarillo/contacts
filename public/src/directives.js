(function () {
	angular.module('ContactsApp')
		.directive('formField',
					['$timeout', 'FieldTypes',
			function($timeout, FieldTypes){
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
					$scope.$on('record:invalid', function(){
						$scope[$scope.field].$setDirty();
					});

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
		.directive('newField',
					['$filter', 'FieldTypes',
			function($filter, FieldTypes){
			// Runs during compile
			return {
				restrict: 'EA',
				templateUrl: 'views/new-field.html',
				replace: true,
				scope: {
					record: '=',
					live: '@'
				},
				require: '^form',
				link: function($scope,element, attr, form) {
					$scope.types = FieldTypes;
					$scope.field = {};

					$scope.show = function(type){
						$scope.field.type = type;
						$scope.display = true;
					}
					$scope.remove = function(){
						$scope.field = {};
						$scope.display = false;
					}
					$scope.add = function(){
						if(form.newField.$valid){
							$scope.record[$filter('camelCase')($scope.field.name)] = [$scope.field.value, $scope.field.type];
							$scope.remove();
							if($scope.live !== 'false'){
								$scope.record.$update(function(updatedRecord){
									$scope.record = updatedRecord;
								});
							}
						}
					};
				}
			};
		}]);

})();