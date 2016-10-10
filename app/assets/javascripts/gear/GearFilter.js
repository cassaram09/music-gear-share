function GearFilter() {
   return function (str) {
      return str.toUpperCase();
  };
}
 
angular
    .module('app')
    .filter('gearFilter', GearFilter);