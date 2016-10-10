GearComponent ={
  templateUrl: 'gear/gear_component.html',
  controller: 'GearController as ctrl',
  restrict: 'EA'
};

angular
  .module('app')
  .component('gearComponent', GearComponent);