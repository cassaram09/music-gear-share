ReceivedMessagesComponent ={
  templateUrl: 'messages/views/received_messages_component.html',
  controller: "ReceivedMessagesController as ctrl",
  restrict: 'EA',
};

angular
  .module('app')
  .component('receivedMessagesComponent', ReceivedMessagesComponent);