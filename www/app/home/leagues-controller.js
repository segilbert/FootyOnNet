(function (){
	'use strict';

	angular.module('footyOnNetApp')
			.controller('LeaguesController', ['footyApi', LeaguesController]);

	function LeaguesController(footyApi){
		var vm = this;

		var leagues = footyApi.getLeagues();
		vm.leagues = leagues;
	};

})();