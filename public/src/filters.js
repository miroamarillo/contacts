(function () {
	angular.module('ContactsApp')
		.filter('labelCase', function(){
			return function(input){
				input = input.replace(/([A-Z])/g, ' $1');
				return input[0].toUpperCase() + input.slice(1);
			}
		})
		.filter('camelCase', function(){
			return function(input){
				return input.toLowerCase().replace(/ (\w)/g, function(match, letter){
					return letter.toUpperCase();
				})
			}
		})
		.filter('keyFilter', function(){
			return function (obj, query){
				var result = {};
				angular.forEach(obj, function(value, key){
					if(key !== query){
						result[key] = value;
					}
				});
				return result;
			}
		})
})();