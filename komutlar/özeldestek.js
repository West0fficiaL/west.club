const dc = require("discord.js");

exports.run = async (client, message, args) => {
  message.member.roles.add("826557415209566228")
  message.react("❤")
  message.channel.send("**Seni Seviyorum ❤**")
}
exports.conf = {
  enabled: true,
  guildonly: true,
  aliases: ['love' , 'flexy'],
  permLevel: 0
}
exports.help = {
  name: "love"
}