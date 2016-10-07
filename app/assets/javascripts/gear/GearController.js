function GearController(GearService) {
  vm = this;

  vm.name = "I'm gear";

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


}

angular
  .module('app')
  .controller('GearController', GearController);