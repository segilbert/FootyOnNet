(function (){
	'use strict';

	angular.module('footyOnNetApp')
               .controller('LocationMapController', ['$stateParams', LocationMapController]);

	function LocationMapController($stateParams){
		var vm = this;

		vm.locationId = Number($stateParams.id);

		// TODO: Update
		vm.map = {
				center: {
							latitude: 51.219053, 
							longitude: 4.404418 
						},
				zoom: 12
		};

		vm.marker = {};
		
		console.log("map", vm.map);
	};

})();