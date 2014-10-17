(function (){
	'use strict';

	angular.module('footyOnNetApp')
               .controller('LocationMapController', ['$stateParams', 'footyApi', 'GoogleMapApi'.ns(), LocationMapController]);

	function LocationMapController($stateParams, footyApi, GoogleMapApi){
		var vm = this;

		vm.locationId = Number($stateParams.id);

		// TODO: Update
		vm.map = {
				control: {},
                options: {  maxZoom: 20,
		                    minZoom: 3
                },
				center: {
							latitude: 38.897677, 
							longitude: -77.036530 
						},
				zoom: 12
		};

		vm.marker = {};

		footyApi.getLeagueData().then(function(data){
			vm.location = _.find(data.locations, { id: vm.locationId});

			vm.marker = {
				latitude: vm.location.latitude,
				longitude: vm.location.longitude,
				title: vm.location.name + "</br>(Tap for directions)",
				showWindow: true
			};

			vm.map.center.latitude = vm.location.latitude;
			vm.map.center.longitude = vm.location.longitude;
		});

		vm.locationClicked = function(marker){
            window.location = "geo:" + marker.latitude + "," + marker.longitude + ";u=35";
        };
	};

})();