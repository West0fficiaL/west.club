const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
 const istatistikler = new Discord.MessageEmbed()
 message.channel.send(`**Buyur Bizim Tagımız:** \`🌙\``)
 return message.channel.send();
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "tag",
  description: "Tagımızı Atar",
  usage: "tag"
};