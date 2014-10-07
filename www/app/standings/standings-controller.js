(function (){
	'use strict';

	angular.module('footyOnNetApp')
		   .controller('StandingsController', ['footyApi', StandingsController]);

	function StandingsController(footyApi){
		var vm = this;

		var data = footyApi.getLeagueData();
		vm.standings = data.standings;
	};

})();