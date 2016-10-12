function MyGearController(GearService, $state, $scope) {
  vm = this;

  vm.filter;
  vm.myGear;
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
    return vm.myGear = data;
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
  .controller('MyGearController', MyGearController);