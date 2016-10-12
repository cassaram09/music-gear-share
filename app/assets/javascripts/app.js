angular
  .module('app', ['ui.router', 'templates'])  
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        template: '<home-component>'
      })
      .state('gear', {
        url: '/gear',
        templateUrl: 'gear/views/gear.html',
        controller: 'GearController as ctrl',
        resolve: {
          gear: 
              function(GearService) {
              return GearService.getGears();
          },
        }
      })
      .state('my-gear', {
        url: '/my-gear',
        template: '<my-gear-component>'
      })
      .state('gear.add', {
        url: '/add',
         templateUrl: 'gear/views/create_gear_component.html',
        controller: 'GearController as ctrl',
        resolve: {
          gear: function() { return []; }
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