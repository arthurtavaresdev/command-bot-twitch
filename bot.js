const tmi = require('tmi.js');
require('dotenv').config();

const interval = 1.5 // 1.5 minutes;
const username = process.env.TWITCH_USERNAME;
const password = process.env.TWITCH_TOKEN;
const args = require('./args.json');
// Define configuration options
const opts = {
  identity: {
    username,
    password,
  },
  channels: args.map((item)=> item.channel)
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)

client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect().catch(console.error);



// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
  args.forEach(item =>{
    client.say(item.channel, item.command)
});

  // send command on first execution
  callCommand();
  setInterval(()=>{
    callCommand();
}, 60000 * interval)
}


function callCommand(){
  args.forEach(item =>{
    client.say(item.channel, item.command)
});
}