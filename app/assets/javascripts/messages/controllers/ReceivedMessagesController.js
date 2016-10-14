function ReceivedMessagesController($state, MessageService) {
  vm = this;
  vm.receivedMessages;
  vm.filter;

  activate();

  function activate(){
    return getReceivedMessages().then(SetMessages)
  }

  function getReceivedMessages(){
    return MessageService.getReceivedMessages();
  }

  function SetMessages(data){
    vm.receivedMessages = data;
  }

}

angular
  .module('app')
  .controller('ReceivedMessagesController', ReceivedMessagesController);