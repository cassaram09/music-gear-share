function CreateGearController(GearService) {
  vm = this;

  vm.name = "I'm New Gear";

  vm.newGear = {};

  vm.createGear = createGear;


  function createGear() {
    GearService.createGear(vm.newGear);
    vm.newGear = {} ;
  }


}

angular
  .module('app')
  .controller('CreateGearController', CreateGearController);