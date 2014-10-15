(function () {
	angular.module('ContactsApp')
		.value('FieldTypes', {
			text: ['Text', 'should be valid text'],
			email: ['Email', 'should be an email address'],
			number: ['Number', 'should be a number'],
			date: ['Date', 'should be a date'],
			datetime: ['Datetime', 'should be a datetime'],
			time: ['Time', 'should be a time'],
			month: ['Month', 'should be a month'],
			week: ['Week', 'should be a week'],
			url: ['URL', 'should be an URL'],
			tel: ['Phone Number', 'should be a phone number'],
			color: ['Color', 'should be a color']
		})
})();