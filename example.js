// let notify = require('popcornnotify')
let notify = require('./index')

API_KEY = 'bc8e09beb93845be998ff37943ea5e6a' // 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
TEST_EMAIL = 'colinmcd94@gmail.com'// 'dave@example.com'
TEST_PHONE = '2159153556' // '5555555555'

if (require.main === module) {

  notify(TEST_PHONE, 'New user sign up')
  
  notify(TEST_EMAIL, 'Memory exceeded...', {
    subject: 'Staging Error'
  })

  notify([TEST_PHONE, TEST_EMAIL], "I'm sorry, Dave. I'm afraid I can't do that.")

  // more in-depth example
  notify([TEST_PHONE, TEST_EMAIL], 'Memory exceeded...', {
    subject: 'Staging Error',
    apiKey: API_KEY // only necessary if environment variable is not set
  }).then(function(result){
    console.log(result) // {success: [TEST_PHONE, TEST_EMAIL]}
  }).catch(function(err){
    console.log(err)
  })


  notify([TEST_PHONE,TEST_EMAIL], "Winter is coming...", {
    subject: "Reminder from Ned",
    apiKey: API_KEY
  })
  .then(function(response){
    console.log("Success.")
  })
  .catch(function(err){
    console.log("Err")
    console.log(err)
  })

}