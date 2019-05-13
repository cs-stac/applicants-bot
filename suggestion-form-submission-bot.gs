var webhookUrl = 'YOUR-SLACK-WEBHOOK-HERE';

function SendSlackMessage(e){

  var formResponse = e.response;
  // If all questions are required, getItemResponses returns responses in form-order
  var itemResponses = formResponse.getItemResponses();
  var gradeLevel = itemResponses[0].getResponse();  // returns a string
  var note = itemResponses[1].getResponse();

  var url = "https://slack.com/api/chat.postMessage";

  var payload = {
    "token" : "YOUR-SLACK-BOT-TOKEN-HERE",
    "as_user" :"true",
    "text" : "We've received a suggestion! 🎉\n" + "Grade level: " + gradeLevel + "\n" + "Suggestion: "  + note,
    "channel" : "#suggestions",
    "type" : "post",
  };

  var options = {
    "method" : "POST",
    "payload" : payload,
    "followRedirects" : false,
    "muteHttpExceptions": true
  };

  // send request to slack API
  var result = UrlFetchApp.fetch(url, options);

  // log errors
  if (result.getResponseCode() == 200) {
   var params = JSON.parse(result.getContentText());
   Logger.log(params);
  }
}
