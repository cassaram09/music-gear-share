function CreateGearController(GearService, $state, $scope, gear) {
  vm = this;
  vm.newGear = {};
  vm.createGear = createGear;

  function createGear() {
    GearService.createGear(vm.newGear);
    vm.newGear = {};
    sweetAlert('Created!');
    $state.go('gear', {}, { reload: true });
  }

}

angular
  .module('app')
  .controller('CreateGearController', CreateGearController);