angular
  .module('app', ['ui.router', 'templates'])  
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/index.html',
        controller: 'HomeController'
      });
      $urlRouterProvider.otherwise('/');
  });
  // .config(function($httpProvider) {
  //   // for CSRF errors
  //   $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  // });