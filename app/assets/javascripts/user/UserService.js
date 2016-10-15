function UserService($http){
  return {
    getUser: getUser,
    updateUser: updateUser,
    deleteUser: deleteUser
  }

  function getUser() {
    return $http.get('api/v1/profile')
      .then(handleResponse)
      .catch(handleError);
  }

  function updateUser(user){
    var req = {
      method: 'PATCH',
      url: '/users',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        user: user
      }
    }
    return $http(req).then(handleUpdateResponse).catch(handleUpdateError);
  }

  function deleteUser(User){
    var req = {
      method: 'DELETE',
      url: 'api/v1/Users/' + User.id,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        User: User
      }
    };
    return $http(req).then(handleDeleteResponse).catch(handleError);
  }

  function handleUpdateResponse(response){
    sweetAlert('Updated!');
    console.log(response)
    return response.data;
  }

  function handleDeleteResponse(response){
    sweetAlert('Deleted');
  }


  function handleResponse(response){
    console.log(response)
    return response.data;
  }

  function handleError(error){
    console.log(error);
    sweetAlert("There was an error!", error,"error")
  }

  function handleUpdateError(error){
    sweetAlert("Error!", "There was an error with your submission. Check your passwords are correct and/or match.","error")
  }
}

angular
  .module('app')
  .service('UserService', UserService);
