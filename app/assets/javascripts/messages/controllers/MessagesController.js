function MessagesController($state, MessageService) {
  vm = this;

  vm.sendMessage = sendMessage;

  activate();

  function activate(){
  }

  function sendMessage(userId){
    var recipient = userId
    swal({
      title: "Rent this gear",   
      text: "Send the owner a message",   
      type: "info",   
      closeOnConfirm: false,   
      showLoaderOnConfirm: true, 
      type: "input"
    },
    function(inputValue){
      return MessageService.createMessage(inputValue, recipient);  
    });
  }

}

angular
  .module('app')
  .controller('MessagesController', MessagesController);