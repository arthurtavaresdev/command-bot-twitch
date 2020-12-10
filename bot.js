const tmi = require('tmi.js');
require('dotenv').config();

const interval = 0.45
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
  setInterval(()=>{
    callCommand();
}, 60000 * interval)
}


function callCommand(){
  args.forEach(item =>{
    const date = new Date();
    // current hours
    let hours = date.getHours();

    // current minutes
    let minutes = date.getMinutes();
    console.log(`[${hours}:${minutes}] - Executou ${item.command} para o canal ${item.channel}`)
    client.say(item.channel, item.command)  
}); 
}