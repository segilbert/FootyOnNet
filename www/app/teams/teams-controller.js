(function (){
	'use strict';

	angular.module('footyOnNetApp')
		   .controller('TeamsController', ['footyApi', TeamsController]);

	function TeamsController(footyApi){
		var vm = this;

		var data = footyApi.getLeagueData();
		vm.teams = data.teams;
	};

})();