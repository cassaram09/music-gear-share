function MessagesController($state, MessageService) {
  vm = this;

  vm.name = "Still working on this! Check back later"
  vm.sendMessage = sendMessage;

  activate();

  function activate(){
  }

  function sendMessage(){
    swal({
      title: "Rent this gear",   
      text: "Send the owner a message",   
      type: "info",   
      closeOnConfirm: false,   
      showLoaderOnConfirm: true, 
      type: "input"
    },
    function(inputValue){
      MessageService.createMessage(inputValue);
    });
  }

}

angular
  .module('app')
  .controller('MessagesController', MessagesController);