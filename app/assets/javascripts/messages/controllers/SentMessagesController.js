function SentMessagesController(messages) {
  vm = this;
  
  vm.filter;

  vm.messages = messages;

}

angular
  .module('app')
  .controller('SentMessagesController', SentMessagesController);