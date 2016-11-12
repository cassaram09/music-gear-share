GearComponent ={
  templateUrl: 'gear/views/gear_component.html',
  controllerAs: 'ctrl',
  restrict: 'EA',
  bindings:{
    gears: "=",
    count: "="
  }
};

angular
  .module('app')
  .component('gearComponent', GearComponent);