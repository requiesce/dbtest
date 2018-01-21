const Discord = require('discord.js');
const client = new Discord.Client();
const commandPrefix = '!';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
	
    if (message.content === '!summon') {
    	message.reply('im trying to join your voice channel :heart:');
	    
	/*if (message.member.voiceChannel) { summon(message.member.voiceChannel); } 
	    else { message.reply("You should join a voice channel first."); } */	    
  	}
	
	if (!message.author.bot){
        handleCommand(message);
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

function datestamp()
{
	return '[' + new Date().toUTCString() + '] ';
}

function restart()
{
	console.log(datestamp() + 'Restarted by NodeJS');
	process.exit();
}



function handleCommand(message) {
    if (!message.content.startsWith(commandPrefix)) return;

    var content = message.content;
    var channel = message.channel;
    var command = content.split(' ')[0].split(commandPrefix)[1];
    var parameter = content.split(' ')[1];

    if (channel.id == '286471145878847488') {
        if (content == '!all') {
            channel.sendMessage(worldsWithLocation(['dwf', 'elm', 'rdi', 'dead']));
        }
        return;
    }

    if (command && !parameter) {
        switch (command) {
			case 'nom':
				message.channel.sendMessage('<:feelsAmazing:300976265714860034><:wbsCon:300985566563139597><:wbsFarm:300985367090167808><:wbsHerb:300985537118863370><:wbsMine:300985403878670346><:wbsSmith:300985465899712532>');
				break;
        }
    }
}




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
