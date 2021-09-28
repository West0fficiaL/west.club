const Discord = require("discord.js");

exports.run = (client, message) => {

let motion = new Discord.MessageEmbed()
  
    .setThumbnail(message.author.displayAvatarURL())
    .setAuthor(client.user.username, client.user.avatarURL)
    .addField(
      "Veriler", 
      `> Toplam sunucu: **${
        client.guilds.cache.size
      }** \n> Toplam kullanıcı: **${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}** \n> Toplam kanal: **${
        client.channels.cache.size
      }**`
    ) 
    .addField(
      "Bot Geliştiricisi",
      `> Bot geliştiricisi ➡ <@766932288058818581> | **<@810256860816605264>**`
    ) 
    .addField(
      "Sürümler",
      `> Discord.JS : **v${Discord.version}** \n> Node.JS: **${process.version}**`
    ) 
    .addField(
      "Gecikmeler",
      `> Bot pingi: **${
        client.ws.ping
      }** \n> Mesaj gecikmesi: **${new Date().getTime() -
        message.createdTimestamp}**`
    )
    
    .setTimestamp()
    .setColor("RANDOM");
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["istatistik2", "i2"]
};

exports.help = {
  name: "istatistik2",
  description: "Türkiyenin Saatini Gösterir ",
  usage: "gç"
};

