(function (){
	'use strict';

	angular.module('footyOnNetApp')
			.controller('LeaguesController', ['$state', 'footyApi', LeaguesController]);

	function LeaguesController($state, footyApi){
		var vm = this;

		footyApi.getLeagues().then(function(data){
			vm.leagues = data;	
		});

		vm.selectLeague = function(leagueId){
			footyApi.setLeagueId(leagueId);
			$state.go("app.teams");
		}
	};

})();