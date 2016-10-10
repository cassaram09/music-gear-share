function MessagesController() {
  vm = this;

  vm.name = "We're in the messages controller!";

}

angular
  .module('app')
  .controller('MessagesController', MessagesController);