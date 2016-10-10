HomeComponent ={
  templateUrl: 'home/home_component.html',
  controller: 'HomeController as ctrl',
  restrict: 'EA'
};

angular
  .module('app')
  .component('homeComponent', HomeComponent);