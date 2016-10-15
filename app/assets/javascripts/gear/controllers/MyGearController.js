function MyGearController(GearService, $state, $scope) {
  vm = this;

  vm.filter;
  vm.gears;
  vm.updateGear = updateGear;
  vm.deleteGear = deleteGear;
  vm.gearTypes = [];

  activate();

  function activate(){
    GearService.getGearTypes().then(setGearTypes);
    GetGears().then(SetGears);
  }

  function GetGears(){
    return GearService.getMyGears();
  }

  function SetGears(data){
    vm.gears = data;
  }

  function setGearTypes(data){
    return vm.gearTypes = data;
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