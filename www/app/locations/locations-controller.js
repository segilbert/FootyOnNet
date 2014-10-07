(function (){
	'use strict';

	angular.module('footyOnNetApp')
			.controller('LocationsController', ['footyApi', LocationsController]);

	function LocationsController(footyApi){
		var vm = this;

		var data = footyApi.getLeagueData();
		vm.locations = data.locations;
	};

})();