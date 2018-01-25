(function () {
	'use strict';

	function cocktailSearchService($http, searchConfigService) {
		var cocktailSearch = {};
		cocktailSearch.cocktailList = [];
		cocktailSearch.cocktailDetail = {};
		cocktailSearch.getCocktails = getCocktails;
		cocktailSearch.getCocktailDetails = getCocktailDetails;

		function getCocktails(){
			return $http.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + searchConfigService.ingredient)
					.then(function(response){
						console.log('Success: %o', response);
						cocktailSearch.cocktailList = response.data.drinks;
						console.log(cocktailSearch.cocktailList);
					})
					.catch(function(error){
						console.log('Error: %o', error);
						cocktailSearch.cocktailList = [];
					});
		}


		function getCocktailDetails(cocktailId){
			return $http.get('http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + cocktailId)
					.then(function(response){
						console.log('Success: %o', response);
						cocktailSearch.cocktailDetail = response.data.drinks[0];
						console.log(cocktailSearch.cocktailDetail);
					})
					.catch(function(error){
						console.log('Error: %o', error);
						cocktailSearch.cocktailDetail = [];
					});
		}


		return cocktailSearch;
	}

	cocktailSearchService.$inject = ['$http', 'searchConfigService'];

	angular.module('daproject')
		.factory('cocktailSearchService', cocktailSearchService);

})();
