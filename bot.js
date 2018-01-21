const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});


const commandPrefix = '!';

var commands = [
	{
		command: "summon",
		description: "Summons me to your voice channel",
		parameters: [],
		execute: function(message, params) {
			if (message.member.voiceChannel) {
				summon(message.member.voiceChannel);
			} else {
				message.reply("You should join a voice channel first.");
			}
		}
	}
];

function summon(voiceChannel)
{
	voiceChannel.join().then(connection => {voice_connection = connection;}).catch(console.error);
	setTimeout(function () {
		if (!voiceChannel.members.get(bot.user.id))
		{
			restart();
		}			
	}, 5000);
}


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
