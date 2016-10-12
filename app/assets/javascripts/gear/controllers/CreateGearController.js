function CreateGearController(GearService, $state, $scope) {
  vm = this;
  vm.newGear = {};
  vm.createGear = createGear;

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