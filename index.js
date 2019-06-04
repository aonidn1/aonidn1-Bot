const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on("ready", function()
    {console.log('ready');
});

bot.on("message", function(message)
    {if (message.author.equals(bot.user)) return;

    if (message.content == "aonidn1") (
        message.channel.sendMessage("Wut?")
        
    )

});

client.login(process.env.BOT_TOKEN);
