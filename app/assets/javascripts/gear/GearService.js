function GearService($http){
  return {
    getGears: getGears,
    createGear: createGear,
    updateGear: updateGear,
    deleteGear: deleteGear
  }

  function getGears() {
    return $http.get('/gears')
      .then(handleResponse)
      .catch(handleError);
  }

  function createGear(gear){
    var req = {
      method: 'POST',
      url: '/gears',
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
      url: '/gears/' + gear.id,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        gear: gear
      }
    };
    return $http(req).catch(handleError);
  }

  function deleteGear(gear){
    var req = {
      method: 'DELETE',
      url: '/gears/' + gear.id,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        gear: gear
      }
    };
    return $http(req).catch(handleError);
  }

  function handleResponse(response){
    console.log(response);
    return response.data;
  }

  function handleError(error){
    console.log(error);
  }
}

angular
  .module('app')
  .service('GearService', GearService);
