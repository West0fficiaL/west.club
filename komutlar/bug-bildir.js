const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let channel = bot.channels.cache.get("827288270370635786")//bug repot kanal id'i
let embed = new Discord.MessageEmbed()
.setTitle("Bug Report")
.setThumbnail("hhttps://cdn.discordapp.com/attachments/807403160200413194/828003282399002681/unknown.png")
.addField("Bug", bug)
.addField("Report Eden", user, true)
.addField("Sunucu", guild, true)
.addField("Sunucu ID", guildid, true)
.addField("Kanal", kanal, true)
.setColor("#f49542")

message.channel.send(":white_check_mark:  **| Bug Report Başarı İle İletildi.**")
channel.send(embed).then(i => i.react("⏳"))

  


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bug'],
  permLevel: 0  
};

exports.help = {
  name: 'bug-bildir',
  description: 'Bug Bildirme Komudu.',
  usage: 'bug-bildir'
}