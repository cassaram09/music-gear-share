function GearService($http){
  return {
    getGears: getGears,
    createGear: createGear,
    updateGear: updateGear,
    deleteGear: deleteGear,
    getMyGears: getMyGears,
    getGearTypes: getGearTypes
  }

  function getGears() {
    return $http.get('api/v1/gears')
      .then(handleResponse)
      .catch(handleError);
  }

  function getMyGears() {
    return $http.get('api/v1/my-gear')
      .then(handleResponse)
      .catch(handleError);
  }

  function getGearTypes() {
    return $http.get('api/v1/gear-types')
      .then(handleResponse)
      .catch(handleError);
  }

  function createGear(gear){
    var req = {
      method: 'POST',
      url: 'api/v1/gears',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        gear: gear
      }
    };
    return $http(req).catch(handleError);
  }

  function updateGear(gear){
      var req = {
        method: 'PATCH',
        url: 'api/v1/gears/' + gear.id,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          gear: gear
        }
    }

    return $http(req).then(handleUpdateResponse).catch(handleError);
  }

  function deleteGear(gear){
    var req = {
      method: 'DELETE',
      url: 'api/v1/gears/' + gear.id,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        gear: gear
      }
    };
    return $http(req).then(handleDeleteResponse).catch(handleError);
  }

  function handleUpdateResponse(response){
    sweetAlert('Updated!');
    return response.data;
  }

  function handleDeleteResponse(response){
    sweetAlert('Deleted');
  }


  function handleResponse(response){
    return response.data;
  }

  function handleError(error){
    console.log(error);
    sweetAlert("There was an error!", "","error")
  }
}

angular
  .module('app')
  .service('GearService', GearService);
