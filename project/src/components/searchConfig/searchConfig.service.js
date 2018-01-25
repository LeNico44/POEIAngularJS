(function () {
	'use strict';

	function searchConfigService() {
		var searchConfig = {};
		searchConfig.ingredient = '';

		return searchConfig;
	}

	searchConfigService.$inject = [];

	angular.module('daproject')
		.factory('searchConfigService', searchConfigService);

})();
