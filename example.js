let notify = require('popcornnotify')

notify('5555555555', 'New user sign up')
notify('team@popcornnotify.com', 'Memory exceeded...', {
  subject: 'Staging Error'
})
notify(['5555555555', 'dave@example.com'], "I'm sorry, Dave. I'm afraid I can't do that.")


// more in-depth example
notify(['5555555555', 'dave@example.com'], 'Memory exceeded...', {
  subject: 'Staging Error',
  apiKey: "YOUR_API_KEY" // only necessary if environment variable is not set
}).then(function(result){
  console.log(result) // {success: ['5555555555', 'dave@example.com']}
}).catch(function(err){
  console.log(err)
})