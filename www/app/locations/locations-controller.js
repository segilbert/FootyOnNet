(function (){
	'use strict';

	angular.module('footyOnNetApp')
			.controller('LocationsController', ['footyApi', LocationsController]);

	function LocationsController(footyApi){
		var vm = this;

		footyApi.getLeagueData().then(function(data){
			vm.locations = data.locations;	
		});
		
	};

})();