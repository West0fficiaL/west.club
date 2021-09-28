const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  
  const haribo = new Discord.MessageEmbed()
  
  .setTitle('31')
   
  .setColor("Random")
  
  .setThumbnail('https://images-ext-1.discordapp.net/external/Ms3Yr6oswpq2RSqngbEGsWXaLnlv9x6iQoULPzgmj_c/https/cdn.discordapp.com/emojis/685857626898038799.png')
  
  .setDescription('Merhabalar AQ')
  
  message.channel.send(haribo)
  }
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases : ['yesflexy' , '31'],
  permLevel: 0
}

exports.help = {
  name: "31",
  description: "haribo hakkında bilgi verir.",
  usage: "31"
}

