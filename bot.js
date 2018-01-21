const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
	
     if (message.content === 'summon') {
    	message.reply('im here');
  	}
	
   // if (!message.author.bot)
//	{
//        handleCommand(message);
//    }	
});


const commandPrefix = '!';

function handleCommand(message) {
    if (!message.content.startsWith(commandPrefix)) return;

    var content = message.content;
    var channel = message.channel;
    var command = content.split(' ')[0].split(commandPrefix)[1];
    var parameter = content.split(' ')[1];
	
	
    if (command && !parameter) {
        switch (command) {
            case 'summon':
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

function datestamp()
{
	return '[' + new Date().toUTCString() + '] ';
}

function restart()
{
	console.log(datestamp() + 'Restarted by NodeJS');
	process.exit();
}

process.on('uncaughtException', function (error) {
	console.error(datestamp() + 'Error: Uncaught Exception: \n' + error.toString() + '\n');
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
