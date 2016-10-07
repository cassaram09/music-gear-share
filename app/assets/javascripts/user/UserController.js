function UserController() {
  vm = this;

  vm.name = "hello";

}

angular
  .module('app')
  .controller('UserController', UserController);