// require the discord.js module
const config = require('./config.json');
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

const prefix = config.prefix;

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    // client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const ff = args.shift().toLowerCase();



    console.log(ff)
    if (ff == `ping`) {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong');
    }
    else if (ff == `server`) {
        message.channel.send(`This server's name is: ${message.guild.name}`);

    }
    else if(ff==""){
        message.channel.send('Did anyone call me?');
    }
});

// login to Discord with your app's token
client.login(config.token);