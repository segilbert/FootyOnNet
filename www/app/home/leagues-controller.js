(function (){
	'use strict';

	angular.module('footyOnNetApp')
			.controller('LeaguesController', ['$state', 'footyApi', LeaguesController]);

	function LeaguesController($state, footyApi){
		var vm = this;

		var leagues = footyApi.getLeagues();
		vm.leagues = leagues;

		vm.selectLeague = function(leagueId){
			// TODO: select correct league
			$state.go("app.teams");
		}
	};

})();