MyGearComponent = {
  templateUrl: 'gear/views/my_gear_component.html',
  controller: "MyGearController as ctrl",
  restrict: 'EA'
  // bindings:{
  //   gears: "="
  // }
};

angular
  .module('app')
  .component('myGearComponent', MyGearComponent);