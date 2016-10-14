SentMessagesComponent ={
  templateUrl: 'messages/views/sent_messages_component.html',
  controllerAs: "ctrl",
  restrict: 'EA',
  bindings: {
    messages: "="
  }
};

angular
  .module('app')
  .component('sentMessagesComponent', SentMessagesComponent);