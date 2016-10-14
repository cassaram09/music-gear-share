SentMessagesComponent ={
  templateUrl: 'messages/views/sent_messages_component.html',
  controller: "SentMessagesController as ctrl",
  restrict: 'EA',
};

angular
  .module('app')
  .component('sentMessagesComponent', SentMessagesComponent);