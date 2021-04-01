'use strict'

const fs = require('fs');
const { Client } = require('whatsapp-web.js');

// Path where the session data will be stored
const SESSION_FILE_PATH = './session.json';

// Load the session data if it has been previously saved
let sessionData;
if(fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);
}

// Use the saved values
const client = new Client({
    session: sessionData
});

const qrcode = require('qrcode-terminal');

class WhatsAppController {
  async init() {


    client.on('qr', (qr) => {
      qrcode.generate(qr, { small: true });
    });

    client.on('ready', () => {
      console.log('Client is ready!');
    });

    client.on('message', message => {
      console.log(message.body);
    });

    client.initialize();


  }
}

module.exports = WhatsAppController
