function EditGearController(GearService, $state, $scope) {
  vm = this;

  vm.name = "I'm gear";

  vm.filter;

  vm.gears;

  vm.updateGear = updateGear;

  vm.deleteGear = deleteGear;

  activate();

  function activate(){
    getGears();
  }

  function getGears(){
    return GearService.getMyGears().then(setGears);
  }

  function setGears(data) {
    return vm.gears = data;
  }

  function updateGear(gear) {
    GearService.updateGear(gear);
  }

  function deleteGear(gear) {
    GearService.deleteGear(gear);
    $state.reload();
  }


}

angular
  .module('app')
  .controller('EditGearController', EditGearController);