(function (){
	'use strict';

	angular.module('footyOnNetApp')
			.controller('LeaguesController', ['$state', 'footyApi', LeaguesController]);

	function LeaguesController($state, footyApi){
		var vm = this;

		footyApi.getLeagues(function(data){
			vm.leagues = leagues;	
		});

		vm.selectLeague = function(leagueId){
			footyApi.setLeagueId(leagueId);
			$state.go("app.teams");
		}
	};

})();