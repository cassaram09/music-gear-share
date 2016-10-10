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
        controller: 'GearController',
        resolve: {
          gears: function(GearService){
            return GearService.getGears();
          }
        }
      })
      .state('gear.edit-gear', {
        url: '/edit-gear',
        templateUrl: 'gear/gear_index.html',
        controller: 'GearController',
        resolve: {
          gears: function(GearService){
            return GearService.getGears();
          }
        }
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'user/user_profile.html',
        controller: 'UserController'
      })
      .state('messages', {
        url: '/messages',
        templateUrl: 'messages/messages_index.html',
        controller: 'MessagesController'
      })
      .state('messages.new-message', {
        url: '/new-message',
        templateUrl: 'messages/messages_new.html',
        controller: 'MessagesController'
      })
      $urlRouterProvider.otherwise('/');
  })
  .config(function($httpProvider) {
    // for CSRF errors
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('gear_type', 'content');
  });