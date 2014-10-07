(function (){
	'use strict';

	angular.module('footyOnNetApp')
		   .controller('GameController', 
		   	['$stateParams', 'footyApi', GameController]);

	function GameController($stateParams, footyApi){
		var vm = this;

		var gameId = Number($stateParams.id);
		var data = footyApi.getLeagueData();

		vm.game = _.find(data.games, { "id": gameId });

	};

})();