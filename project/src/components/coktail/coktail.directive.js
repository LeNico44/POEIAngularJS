(function() {
  'use strict';

	angular.module('daproject')
    .directive('cocktail', function() {
      return {
        templateUrl: 'src/components/coktail/coktail.html',
        restrict: 'E',
        bindToController: {
          cocktailElement: '='
        },
	scope: {},
        controller: 'CocktailCtrl',
        controllerAs: 'cocktail'
      };
    });

})();
