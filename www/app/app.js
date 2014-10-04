angular.module("footyNoNetApp", ["ionic"])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('home', {
      abstract: true,
      url: "/home",
      templateUrl: "app/home/home.html"
    })

 	.state('home.leagues', {
      url: "/leagues",
      views: {
        "tab-leagues": {
          templateUrl: "app/home/leagues.html"
        }
      }
    })

	.state('home.footyboard', {
      url: "/footyboard",
      views: {
        "tab-footyboard": {
          templateUrl: "app/home/footyboard.html"
        }
      }
    })

    .state('home.myteams', {
      url: "/myteams",
      views: {
        "tab-myteams": {
          templateUrl: "app/home/myteams.html"
        }
      }
    })

    .state('app', {
      abstract: true,
      url: "/app",
      templateUrl: "app/layout/menu-layout.html"
    })

    // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home/leagues');
});