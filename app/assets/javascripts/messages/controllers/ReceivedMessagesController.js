function ReceivedMessagesController(receivedMessages, DateService) {
  vm = this;
  vm.filter;

  activate();

  function activate(){
    return vm.messages = DateService.updateMessageTime(receivedMessages);
  }


}

angular
  .module('app')
  .controller('ReceivedMessagesController', ReceivedMessagesController);