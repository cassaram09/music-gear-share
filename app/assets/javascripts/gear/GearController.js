function GearController(GearService) {
  vm = this;

  vm.name = "I'm gear";

  vm.newGear = {};

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
    return GearService.createGear().then(setGears);
  }


}

angular
  .module('app')
  .controller('GearController', GearController);