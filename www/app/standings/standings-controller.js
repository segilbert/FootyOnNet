(function (){
	'use strict';

	angular.module('footyOnNetApp')
		   .controller('StandingsController', ['footyApi', StandingsController]);

	function StandingsController(footyApi){
		var vm = this;

		footyApi.getLeagueData().then(function(data){
			vm.standings = data.standings;	
		});
		
	};

})();