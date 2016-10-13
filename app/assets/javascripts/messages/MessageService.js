function MessageService($http){
  return {
    createMessage: createMessage,
    getSentMessages: getSentMessages,
    getReceivedMessages: getReceivedMessages,

  }

  function getSentMessages() {
    return $http.get('api/v1/sent-messages')
      .then(handleResponse)
      .catch(handleError);
  }

  function getReceivedMessages() {
    return $http.get('api/v1/received-messages')
      .then(handleResponse)
      .catch(handleError);
  }

  function createMessage(message){
    var req = {
      method: 'POST',
      url: 'api/v1/messages',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        message: {
          content: message
        }
      }
    };
    return $http(req).catch(handleError);
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
  .service('MessageService', MessageService);
