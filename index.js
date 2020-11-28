// require the discord.js module
const config = require('./config.json');
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

const prefix = config.prefix;


const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('AN EMBED')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://imgur.com/a/DEYCYOf', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://imgur.com/a/DEYCYOf')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://imgur.com/a/DEYCYOf')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://imgur.com/a/DEYCYOf');

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
        message.channel.send('Did anyone just call me?');
    }
    else if (ff == `userinfo`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
    else if (ff == 'kick') {
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        }
        const taggedUser = message.mentions.users.first();
    
        message.channel.send(`You wanted to kick: ${taggedUser.username}`);
    }
    else if (ff == 'avatar') {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }
    
        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
        });
    
        // send the entire array of strings as a message
        // by default, discord.js will `.join()` the array with `\n`
        message.channel.send(avatarList);
    }
    else if (ff=="embed"){
        message.channel.send(exampleEmbed);
    }
});

// login to Discord with your app's token
client.login(config.token);
