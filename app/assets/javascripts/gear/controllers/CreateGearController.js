function CreateGearController(GearService, $state, $scope, gears) {
  vm = this;
  vm.newGear = {};
  vm.createGear = createGear;
  vm.gearTypes = gears;

  function createGear() {
    GearService.createGear(vm.newGear);
    vm.newGear = {};
    sweetAlert('Created!');
    $state.go('my-gear', {}, { reload: true });
  }

}

angular
  .module('app')
  .controller('CreateGearController', CreateGearController);