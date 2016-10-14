function SentMessagesController(sentMessages, DateService) {
  vm = this;
  vm.filter;

  activate();

  function activate(){
    return vm.messages = DateService.updateMessageTime(sentMessages);
  }

}

angular
  .module('app')
  .controller('SentMessagesController', SentMessagesController);