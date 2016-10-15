function DateService() {
  var service = this;

  service.unixTimeConverter = function(unixTime){
    var date = moment(unixTime)
    return date.format("dddd, MMMM Do YYYY, h:mm:ss a")
  }

  service.updateMessageTime = function(messages) {
    var updatedMessages = messages;
    for (var i = 0; i < messages.length; i++ ){
      updatedMessages[i].created_at = service.unixTimeConverter(messages[i].created_at);
    }
    return updatedMessages;
  }

}

angular
  .module('app')
  .service('DateService', DateService);