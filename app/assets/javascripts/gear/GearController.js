function GearController() {
  vm = this;

  vm.name = "I'm gear";

}

angular
  .module('app')
  .controller('GearController', GearController);