PopcornNotify for npm
=========

Send simple emails and text messages from one API.

## Installation

  `npm install popcornnotify`

## Usage

    let notify = require('popcornnotify')

    notify('555-123-4567', 'New user sign up')
  
    notify('team@example.com', 'Memory exceeded...', {
      subject: 'Staging Error'
    })

    notify(['5554259000', 'dave@example.com'], "I'm sorry, Dave. I'm afraid I can't do that.")

## License

MIT.