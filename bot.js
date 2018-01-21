const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
	
    if (message.content === '!summon') {
    	//message.reply('im here :heart:');
	    		if (message.member.voiceChannel) {
	voiceChannel.join().then(connection => {voice_connection = connection;}).catch(console.error);
	setTimeout(function () {
		if (!voiceChannel.members.get(bot.user.id))
		{
			//restart();
		}			
	}, 5000);
  	}
});

function summon(voiceChannel)
{
	voiceChannel.join().then(connection => {voice_connection = connection;}).catch(console.error);
	setTimeout(function () {
		if (!voiceChannel.members.get(bot.user.id))
		{
			//restart();
		}			
	}, 5000);
}


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
