function MyGearController(GearService, $state, $scope) {
  vm = this;

  vm.filter;
  vm.gears;
  vm.updateGear = updateGear;
  vm.deleteGear = deleteGear;

  activate();

  function activate(){
    return GetGears().then(SetGears);
  }

  function GetGears(){
    return GearService.getMyGears();
  }

  function SetGears(data){
    vm.gears = data;
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