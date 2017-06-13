const Discord = require('discord.js');
const bot =  new Discord.Client();

//Sets the amount of listeners your bot will have.
bot.setMaxListeners(500);

//This block of code will personal message the author who used the command. message.author.send
bot.on('message', (message) =>{
  if (message.content == '!test'){
    message.author.send('Whatever message you would like in reply\n\n'+
			'The formating is up to you.'
			);
  }
});

//This block of code will reply in the same channel the command was given. message.channel.send
bot.on('message', (message) =>{
  if (message.content == '!help'){
    message.channel.send('Whatever message you would like in reply\n\n'+
			'The formating is up to you.'
			);
  }
});

//on the https://discordapp.com/developers/applications/me you have access to your users token
//enter the token below in the USER_TOKEN_HERE
bot.login('USER_TOKEN_HERE');
