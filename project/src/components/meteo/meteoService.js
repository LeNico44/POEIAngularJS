(function () {
	'use strict';

	function meteoService($http, settingService) {
		var meteo = {};
		meteo.meteoList = [];
		meteo.getMeteo = getMeteo;

		function getMeteo() {
			return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + settingService.city + '&APPID=2451066dc244748b9738ea3c26b960ef&units=metric')
					.then(function(response){
						console.log('Success: %o', response);
						meteo.meteoList = response.data.list;
						//console.log(meteo.meteoList);
					})
					.catch(function(error){
						console.log('Error: %o', error);
						meteo.meteoList = [];
					});
		}

		return meteo;
	}

	meteoService.$inject = ['$http', 'settingService'];

	angular.module('daproject')
		.factory('meteoService', meteoService);

})();
