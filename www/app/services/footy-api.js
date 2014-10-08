(function () {
    'use strict';

    angular.module('footyOnNetApp').factory('footyApi', ['$http', footyApi]);

    function footyApi($http) {
        var currentLeagueId;

        function getLeagues(callback){
        	 mimicSupportForCrossSiteDomain();
             $http.get("http://elite-schedule.net/api/leaguedata")
             	  .success(function(data){
             	  		callback(data);
             	  });
        }

        function getLeagueData(callback){
        	mimicSupportForCrossSiteDomain();
            $http.get("http://elite-schedule.net/api/leaguedata/" + currentLeagueId)
                    .success(function(data, status) {
                        console.log("Received schedule data via HTTP.", data, status);
                        callback(data);
                    })
                    .error(function() {
                        console.log("Error while making HTTP call.");                        
                    });
        };

        function setLeagueId(leagueId){
            currentLeagueId = leagueId;
        };

        function mimicSupportForCrossSiteDomain(){
        	delete $http.defaults.headers.common['X-Requested-With'];
        };

        return {
            getLeagues: getLeagues,
            getLeagueData: getLeagueData,
            setLeagueId: setLeagueId
        };
    };
})();