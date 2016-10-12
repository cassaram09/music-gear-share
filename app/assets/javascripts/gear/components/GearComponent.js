GearComponent ={
  templateUrl: 'gear/views/gear_component.html',
  controller: 'GearController as ctrl',
  restrict: 'EA'
};

angular
  .module('app')
  .component('gearComponent', GearComponent);