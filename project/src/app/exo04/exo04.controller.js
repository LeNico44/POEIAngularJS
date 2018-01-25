(function () {
	'use strict';

	function Exo04Ctrl($location, settingService, meteoService) {
		var vm = this;
		vm.input = 'Nantes';
		vm.superService = settingService;
		vm.superMeteo = meteoService;

		vm.consol = consol;



		function consol(input) {
			settingService.city = vm.input;
			console.log(settingService.city);
			meteoService.getMeteo();
		}

		vm.more = function(){
			$location.path('/more');
		}


	}

	Exo04Ctrl.$inject = ['$location', 'settingService', 'meteoService'];

	angular.module('daproject')
		.controller('Exo04Ctrl', Exo04Ctrl);

})();
