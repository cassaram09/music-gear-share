angular
  .module('app', ['ui.router', 'templates'])  
  .config(function($stateProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/index.html',
        controller: 'HomeController'
      });
  });
  // .config(function($httpProvider) {
  //   // for CSRF errors
  //   $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  // });