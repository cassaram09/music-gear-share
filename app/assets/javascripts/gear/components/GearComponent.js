GearComponent ={
  templateUrl: 'gear/views/gear_component.html',
  controllerAs: 'ctrl',
  restrict: 'EA',
  bindings:{
    gears: "="
  }
};

angular
  .module('app')
  .component('gearComponent', GearComponent);