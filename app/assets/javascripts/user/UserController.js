function UserController(UserService) {
  vm = this;
  vm.user;
  vm.editUser = editUser;

  activate();

  function activate(){
    GetUser().then(SetUser)
  }

  function GetUser(){
    return UserService.getUser();
  }

  function SetUser(data){
    return vm.user = data;
  }
  
  function editUser(){
    UserService.updateUser(vm.user);
    vm.user.current_password = "";
    vm.user.password_confirmation = "";
    vm.user.password = "";
  }
}

angular
  .module('app')
  .controller('UserController', UserController);