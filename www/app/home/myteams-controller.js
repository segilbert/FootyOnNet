(function (){
	'use strict';

	angular.module('footyOnNetApp')
               .controller('MyTeamsController', 
               	['$state', 'myTeamsService', 'footyApi', MyTeamsController]);

	function MyTeamsController($state, myTeamsService, footyApi){
		var vm = this;

		vm.myTeams = myTeamsService.getFollowedTeams();

		vm.goToTeam = function(team){
			footyApi.setLeagueId(team.leagueId);
			$state.go("app.team-detail", { id: team.id });
		};
	};

})();