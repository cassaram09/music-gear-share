function GearController() {
  vm = this;

  vm.name = "gello";

}

angular
  .module('app')
  .controller('GearController', GearController);