function SentMessagesController($state, MessageService) {
  vm = this;
  vm.sentMessages;
  vm.filter;

  activate();

  function activate(){
    return getSentMessages().then(SetMessages)
  }

  function getSentMessages(){
    return MessageService.getSentMessages();
  }

  function SetMessages(data){
    vm.sentMessages = data;
  }

}

angular
  .module('app')
  .controller('SentMessagesController', SentMessagesController);