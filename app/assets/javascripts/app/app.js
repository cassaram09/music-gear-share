angular
  .module('app', ['ui.router', 'templates'])  
  .config(function($stateProvider){
    $stateProvider
      .state('gears', {
        url: '/gears',
        templateUrl: 'gear.html',
        // controller: 'GearController'
      });
  })
   .config(function($httpProvider) {
    // for CSRF errors
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  });