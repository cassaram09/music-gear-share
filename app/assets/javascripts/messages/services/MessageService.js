function MessageService($http){
  return {
    createMessage: createMessage,
    getSentMessages: getSentMessages,
    getReceivedMessages: getReceivedMessages,

  }

  function getSentMessages() {
    return $http.get('api/v1/users/sent-messages')
      .then(handleResponse)
      .catch(handleError);
  }

  function getReceivedMessages() {
    return $http.get('api/v1/users/received-messages')
      .then(handleResponse)
      .catch(handleError);
  }

  function createMessage(message, userId){
    var req = {
      method: 'POST',
      url: 'api/v1/messages',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        message: {
          content: message,
          recipient_id: userId
        }
      }
    };
    return $http(req).then(handleCreateResponse).catch(handleError);
  }

  function handleCreateResponse(response){
    sweetAlert("Message sent!", "","success")
  }


  function handleResponse(response){
    console.log(response.data)
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
