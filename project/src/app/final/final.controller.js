(function () {
	'use strict';

	function FinalCtrl(searchConfigService, cocktailSearchService) {
		var vm = this;
		vm.searchConfigService = searchConfigService;
		vm.cocktailSearchService = cocktailSearchService;
		vm.search = search;
		vm.input = ''

		function search(input) {
			searchConfigService.ingredient = vm.input;
			console.log(searchConfigService.ingredient);
			cocktailSearchService.getCocktails();

		}
	}

	FinalCtrl.$inject = ['searchConfigService','cocktailSearchService'];

	angular.module('daproject')
		.controller('FinalCtrl', FinalCtrl);

})();
