CreateGearComponent = {
  templateUrl: 'gear/views/create_gear_component.html',
  controller: 'GearController as ctrl',
  restrict: 'EA'
};

angular
  .module('app')
  .component('createGearComponent', CreateGearComponent);