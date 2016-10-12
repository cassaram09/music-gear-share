function GearController(gear) {
  vm = this;
  vm.filter;
  vm.gears = gear;
}

angular
  .module('app')
  .controller('GearController', GearController);