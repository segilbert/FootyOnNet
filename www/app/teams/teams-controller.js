(function (){
	'use strict';

	angular.module('footyOnNetApp')
		   .controller('TeamsController', ['$scope', 'footyApi', TeamsController]);

	function TeamsController($scope, footyApi){
		var vm = this;

		vm.loadList = function(forceRefresh){

			footyApi.getLeagueData(forceRefresh).then(function(data){
				vm.teams = data.teams;	
			}).finally(function(){
					$scope.$broadcast('scroll.refreshComplete');
				});
		};

		vm.loadList(false);
	};

})();