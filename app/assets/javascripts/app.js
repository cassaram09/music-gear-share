angular
  .module('app', ['ui.router', 'templates'])  
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/index.html',
        controller: 'HomeController'
      })
      .state('gear', {
        url: '/gear',
        templateUrl: 'gear/gear_index.html',
        controller: 'GearController'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'user/user_profile.html',
        controller: 'UserController'
      })
      $urlRouterProvider.otherwise('/');
  });
  // .config(function($httpProvider) {
  //   // for CSRF errors
  //   $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  // });