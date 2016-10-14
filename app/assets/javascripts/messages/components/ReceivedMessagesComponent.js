ReceivedMessagesComponent ={
  templateUrl: 'messages/views/received_messages_component.html',
  controllerAs: "ctrl",
  restrict: 'EA',
  bindings: {
    messages: "="
  }
};

angular
  .module('app')
  .component('receivedMessagesComponent', ReceivedMessagesComponent);