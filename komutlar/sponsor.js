const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  
  const haribo = new Discord.MessageEmbed()
  
  .setTitle(' :tools: Bizlere Ve Botumuza Yardımcı Olan ,  Sanal Sunucu Sağlayan , Sponsorumuz SlaveCloud.COM Sizlerde Discord Sunucumuza Gelip Hizmetten Yararlanabilirsiniz. ')
  
  .setColor("Random")
  
  .setThumbnail('https://media.discordapp.net/attachments/801410698478354443/829094649003638814/images.png')
  
  .setDescription('SlaveCloud.COM')
  
  message.channel.send(haribo)
  }
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases : ['slavecloud' , 'sponsor'],
  permLevel: 0
}

exports.help = {
  name: "Sponsor",
  description: "Sponsorumuz Hakkında Bilgi Verir.",
  usage: "sponsor"
}
