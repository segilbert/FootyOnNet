(function (){
	'use strict';

	angular.module('footyOnNetApp')
		   .controller('TeamsController', ['footyApi', TeamsController]);

	function TeamsController(footyApi){
		var vm = this;

		footyApi.getLeagueData(function(data){
			vm.teams = data.teams;	
		});
		
	};

})();