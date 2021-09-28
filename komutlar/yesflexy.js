const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  
  const haribo = new Discord.MessageEmbed()
  
  .setTitle(' Selam, Ben Furkan , Flexy Botunun Geliştiricisi Ve Sahibiyim. Her Hangi Bir Sorun Olursa Bana Mesaj Atman Yeterli  ; ŦƲƦҜΔƝ ƳƗŁΜΔȤ 🌙#4669 ')
  
  .setColor("Random")
  
  .setThumbnail('https://images-ext-1.discordapp.net/external/Ms3Yr6oswpq2RSqngbEGsWXaLnlv9x6iQoULPzgmj_c/https/cdn.discordapp.com/emojis/685857626898038799.png')
  
  .setDescription('Merhabalar AQ')
  
  message.channel.send(haribo)
  }
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases : ['yesflexy' , 'sahip'],
  permLevel: 0
}

exports.help = {
  name: "haribo bilgi",
  description: "haribo hakkında bilgi verir.",
  usage: "sahip"
}
