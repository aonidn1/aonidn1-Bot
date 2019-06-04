const Discord = require('discord.js');

const TOKEN = 'NTg1MTA4NDQxNDg0MjMwNjc3.XPU8_g.LfGmz0ys_3r7K62lzw-wLBt9SOo';

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

bot.login(TOKEN);
