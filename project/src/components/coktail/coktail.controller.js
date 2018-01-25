(function () {
	'use strict';

	function CocktailCtrl(cocktailSearchService) {
		var vm = this;
		vm.cocktailSearchService = cocktailSearchService;
	}

	CocktailCtrl.$inject = ['cocktailSearchService'];

	angular.module('daproject')
		.controller('CocktailCtrl', CocktailCtrl);

})();
