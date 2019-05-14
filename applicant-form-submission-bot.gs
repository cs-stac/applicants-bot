var webhookUrl = 'YOUR-SLACK-WEBHOOK-HERE';

function SendSlackMessage(e){

  var formResponse = e.response;

  var url = "https://slack.com/api/chat.postMessage";

  var payload = {
    "token" : "YOUR-SLACK-BOT-TOKEN-HERE",
    "as_user" :"true",
    "text" : "We have a new applicant! 👾 Check the form responses to see the new applicant's information",
    "channel" : "#applicants",
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
