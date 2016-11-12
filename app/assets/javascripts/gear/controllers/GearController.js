function GearController(gear, $scope) {
  vm = this;
  vm.filter;
  vm.count = count;

  activate();

  function activate(){
    getGear();
  }

  function count(gear){
    gear.favoriteCount += 1;
  }

  function getGear() {
   var userId = 4;
    for ( var i = 0; i < gear.length; i++) {
      if (gear[i].user.id === userId){
        gear.splice(i, 1)
      }
      gear[i]['favoriteCount'] = 0;
    }
    return vm.gears = gear;
  }

}

angular
  .module('app')
  .controller('GearController', GearController);