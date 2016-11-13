angular
  .module('app', ['ui.router', 'templates', 'ngMessages'])  
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
      .state('home', {
        url: '/',
        template: '<gear-component gears="ctrl.gears" count="ctrl.count">',
        controller: 'GearController as ctrl',
        resolve: {
          gear: function(GearService) {
            return GearService.getGears();
          },
        }
      })
      .state('my-gear', {
        url: '/my-gear',
        template: '<my-gear-component>',
      })
      .state('my-gear.add', {
        url: '/add',
        templateUrl: 'gear/views/create_gear_component.html',
        controller: 'CreateGearController as ctrl',
        resolve: {
          gears: function(GearService){
            return GearService.getGearTypes();
          }
        } 
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'user/user_profile.html.erb',
        controller: 'UserController as ctrl'
      })
      .state('messages', {
        url: '/messages',
        template: '<messages-component>'
      })
      .state('messages.sent', {
        url: '/sent',
        template: '<sent-messages-component messages="ctrl.messages">',
        controller: 'SentMessagesController as ctrl',
        resolve: {
          sentMessages: function(MessageService, DateService) {
            return MessageService.getSentMessages();
          },
        }
      })
       .state('messages.received', {
        url: '/received',
        template: '<received-messages-component messages="ctrl.messages">',
        resolve: {
          sentMessages: function(MessageService, DateService) {
            return MessageService.getSentMessages();
          },
        }
      })
      // $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');
  })
  .config(function($httpProvider) {
    // for CSRF errors
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('gear_type', 'content');
  });