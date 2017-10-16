const request = require('request');
// const ENDPOINT = "https://popcornnotify.com/notify"
const ENDPOINT = "https://popcornnotify.herokuapp.com/notify"
let API_KEY;

const clean = function(recipient){
  if(recipient.includes('@')){
    // is email
    return recipient
  }else{
    // is phone #
    recipient = recipient.replace(/[^\d]/g,"")
    return recipient
  }
}

const notify = (recipients, message, config)=>{
  return new Promise((res,rej)=>{
    console.log(recipients)
    if(!Array.isArray(recipients) && typeof recipients != "string"){
      throw new Error("First argument should be a string or an Array.")
    }else{
      if(Array.isArray(recipients)){
        // recipients = recipients.map(clean)
      }else{
        recipients = clean(recipients)
      }
    }
    if(!message){
      throw new Error("No message was passed to the function. Pass the message to be sent as the second argument.")
    }
    if(process.env['POPCORNNOTIFY_API_KEY']){
      API_KEY = process.env['POPCORNNOTIFY_API_KEY']
    }else if(config && config.apiKey){
      API_KEY = config.apiKey
    }else{
      throw new Error("No API key found. Either 1) set the environment variable POPCORNNOTIFY_API_KEY, or 2) pass an object containing your key as the third parameter of the function, like so:\n"+JSON.stringify({apiKey:'YOUR_KEY_HERE'},null,2)+".")
    }

    const postData = {
      recipients: recipients,
      message: message,
      api_key:API_KEY
    }
    if(config && config.subject){
      postData.subject = config.subject
    }

    request.post(
      ENDPOINT,
      {
        json: postData 
      },
      function (error, response, body) {
        if(error){
          console.log(error)
          rej(error)
        }else if(response.statusCode >= 200 && response.statusCode <= 400) {
          res(response)
        }else{
          rej(new Error(body.message))
        }
      }
    );
  })
}

notify(['215 915 3556','colinmcd94@gmail.com'], "winter is coming", {subject:"Note from the wall",apiKey:"bc8e09beb93845be998ff37943ea5e6a"})
.then(function(response){
  console.log("Success")
  console.log(response.body) // { success: [ 'colinmcd94@gmail.com' ] }
})
.catch(function(err){
  console.log("Err")
  console.log(err)
})