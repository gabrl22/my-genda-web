var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'homeCtrl',
      templateUrl: 'views/home.html'
    })
    .when('/description/:id', {
      controller: 'descriptionController',
      templateUrl: 'views/description.html'
    })
    .otherwise({
      redirectTo: '/'
    });
  
});
myApp.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('deep-orange')
      .accentPalette('light-blue');
  })