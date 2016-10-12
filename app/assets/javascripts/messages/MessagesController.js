function MessagesController() {
  vm = this;

  vm.name = "Still working on this! Check back later"

  activate();

  function activate(){
    sweetAlert("Still working on this! Check back later");
  }

}

angular
  .module('app')
  .controller('MessagesController', MessagesController);