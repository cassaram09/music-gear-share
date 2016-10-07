function HomeController() {
  vm = this;

  vm.name = "hello";

}

angular
  .module('app')
  .controller('HomeController', HomeController);