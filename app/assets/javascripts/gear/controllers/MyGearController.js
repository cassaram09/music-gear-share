function MyGearController(GearService, $state, $scope) {
  vm = this;

  vm.filter;
  vm.gears;
  vm.updateGear = updateGear;
  vm.deleteGear = deleteGear;
  vm.gearTypes = [];
  vm.toggleEdit = toggleEdit;

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
    for ( var i = 0; i < vm.gears.length; i++){
      vm.gears[i]['show'] = true;
    }
    return vm.gears;
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

  function toggleEdit(gear) {
    gear.show = gear.show === false ? true: false;
  };

}

angular
  .module('app')
  .controller('MyGearController', MyGearController);