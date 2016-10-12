EditGearComponent = {
  templateUrl: 'gear/views/edit_gear_component.html',
  controller: 'EditGearController as ctrl',
  restrict: 'EA',

};

angular
  .module('app')
  .component('editGearComponent', EditGearComponent);