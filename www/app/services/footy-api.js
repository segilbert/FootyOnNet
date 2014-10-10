(function () {
    'use strict';

    angular.module('footyOnNetApp')
            .factory('footyApi', 
                ['$http', '$q', '$ionicLoading', footyApi]);

    function footyApi($http, $q, $ionicLoading) {
        var currentLeagueId = "";

        function getLeagues(){
            var deferred = $q.defer();

        	 $http.get("http://elite-schedule.net/api/leaguedata")
             	    .success(function(data){
                        deferred.resolve(data);
             	    })
                    .error(function() {
                        console.log("Error while making HTTP call.");                        
                        deferred.reject();  
                    });

            return deferred.promise;
        }

        function getLeagueData(){
            var deferred = $q.defer();

            $ionicLoading.show({ template: "Loading..." })

        	$http.get("http://elite-schedule.net/api/leaguedata/" + currentLeagueId)
                    .success(function(data, status) {
                        console.log("Received schedule data via HTTP.", data, status);
                        $ionicLoading.hide();                        
                        deferred.resolve(data);
                    })
                    .error(function() {
                        console.log("Error while making HTTP call.");                        
                        $ionicLoading.hide();
                        deferred.reject();  
                    });

            return deferred.promise;
        };

        function setLeagueId(leagueId){
            currentLeagueId = leagueId;
        };
        
        return {
            getLeagues: getLeagues,
            getLeagueData: getLeagueData,
            setLeagueId: setLeagueId
        };
    };
})();