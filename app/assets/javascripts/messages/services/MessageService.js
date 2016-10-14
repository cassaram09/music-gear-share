function MessageService($http){
  return {
    createMessage: createMessage,
    getSentMessages: getSentMessages,
    getReceivedMessages: getReceivedMessages,

  }

  function getSentMessages(id) {
    return $http.get('api/v1/users/' + id + 'sent-messages')
      .then(handleResponse)
      .catch(handleError);
  }

  function getReceivedMessages(id) {
    return $http.get('api/v1/users/' + id + '/received-messages')
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
