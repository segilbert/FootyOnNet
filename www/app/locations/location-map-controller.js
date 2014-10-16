(function (){
	'use strict';
//'GoogleMapApi'.ns(),
	angular.module('footyOnNetApp')
               .controller('LocationMapController', ['$stateParams',  LocationMapController]);

	function LocationMapController($stateParams, GoogleMapApi){
		var vm = this;

		vm.locationId = Number($stateParams.id);

		// TODO: Update
		vm.map = {
				control: {},
                options: {  maxZoom: 20,
		                    minZoom: 3
                },
				center: {
							latitude: 51.219053, 
							longitude: 4.404418 
						},
				zoom: 12
		};

		vm.marker = {};

		/*
		GoogleMapApi.then(function(maps){
			maps.visualRefresh = true;
		});
		*/

		console.log("map", vm.map);
	};

})();