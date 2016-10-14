MessagesComponent ={
  templateUrl: 'messages/views/messages_component.html',
  controller: "MessagesController as ctrl",
  restrict: 'EA',
};

angular
  .module('app')
  .component('messagesComponent', MessagesComponent);