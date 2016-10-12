function GearController(GearService, $state, $scope, gear) {
  vm = this;

  vm.name = "I'm gear";

  vm.filter;

  vm.newGear = {};

  vm.gears = gear;

  vm.createGear = createGear;

  //activate();

  function activate(){
    getGears();
  }

  function getGears(){
    return GearService.getGears().then(setGears);
  }

  function setGears(data) {
    return vm.gears = data;
  }

  function createGear() {
    GearService.createGear(vm.newGear);
    vm.newGear = {};
    sweetAlert('Created!');
    getGears();
  }


}

angular
  .module('app')
  .controller('GearController', GearController);