function UserController(UserService, $state) {
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
    UserService.updateUser(vm.user)
    setTimeout(function() {     
      $state.reload();   
    }, 2000);
  }
}

angular
  .module('app')
  .controller('UserController', UserController);