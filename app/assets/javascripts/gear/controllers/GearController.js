function GearController(GearService, $state, $scope) {
  vm = this;

  vm.name = "I'm gear";

  vm.filter;

  vm.newGear = {};

  vm.createGear = createGear;

  activate();

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
    $state.go('gear')
  }


}

angular
  .module('app')
  .controller('GearController', GearController);