(function () {
    'use strict';

    angular.module('footyOnNetApp')
            .factory('footyApi', 
                ['$http', '$q', '$ionicLoading', 'DSCacheFactory',
                footyApi]);

    function footyApi($http, $q, $ionicLoading, DSCacheFactory) {
        // Cache handles
        self.leaguesCache = DSCacheFactory.get("leaguesCache");
        self.leagueDataCache = DSCacheFactory.get("leagueDataCache");

        // Caching Options
        self.leaguesCache.setOptions({
            onExpire: function (key, value) {
                getLeagues()
                    .then(function () {
                        console.log("Leagues Cache was automatically refreshed.", new Date());
                    }, function () {
                        console.log("Error getting data. Putting expired item back in the cache.", new Date());
                        self.leaguesCache.put(key, value);
                    });
            }
        });

        self.leagueDataCache.setOptions({
            onExpire: function (key, value) {
                getLeagueData()
                    .then(function () {
                        console.log("League Data Cache was automatically refreshed.", new Date());
                    }, function () {
                        console.log("Error getting data. Putting expired item back in the cache.", new Date());
                        self.leagueDataCache.put(key, value);
                    });
            }
        });

        self.staticCache = DSCacheFactory.get("staticCache");

        function setLeagueId(leagueId){
            self.staticCache.put("currentLeagueId", leagueId);
        }

        function getLeagueId(){
            var id = self.staticCache.get("currentLeagueId");
            console.log("in get leagueid", id);
            return id;
        }


        function getLeagues(){
            var deferred = $q.defer();
            var cacheKey = "league";
            var leaguesData = self.leaguesCache.get(cacheKey);

            $ionicLoading.show({ template: "Loading..." })

            if(leaguesData){
                console.log("Found data inside cache", leaguesData);
                $ionicLoading.hide();
                deferred.resolve(leaguesData);
            } else{
                $http.get("http://elite-schedule.net/api/leaguedata")
                    .success(function(data){
                        self.leaguesCache.put(cacheKey, data);
                        $ionicLoading.hide();
                        deferred.resolve(data);
                    })
                    .error(function() {
                        console.log("Error while making HTTP call.");  
                        $ionicLoading.hide();
                        deferred.reject();  
                    });
            };

            return deferred.promise;
        }

        function getLeagueData(){
            var deferred = $q.defer();
            var cacheKey = "leagueData-" + getLeagueId();
            var leagueData = self.leagueDataCache.get(cacheKey);

            $ionicLoading.show({ template: "Loading..." })

            if(leagueData){
                console.log("Found data inside cache", leagueData);
                $ionicLoading.hide();  
                deferred.resolve(leagueData);
            } else{

            	$http.get("http://elite-schedule.net/api/leaguedata/" + getLeagueId())
                        .success(function(data, status) {
                            console.log("Received schedule data via HTTP.", data, status);
                            self.leagueDataCache.put(cacheKey, data);
                            $ionicLoading.hide();                        
                            deferred.resolve(data);
                        })
                        .error(function() {
                            console.log("Error while making HTTP call.");                        
                            $ionicLoading.hide();
                            deferred.reject();  
                        });
            };
            return deferred.promise;
        };
 
        return {
            getLeagues: getLeagues,
            getLeagueData: getLeagueData,
            setLeagueId: setLeagueId
        };
    };
})();