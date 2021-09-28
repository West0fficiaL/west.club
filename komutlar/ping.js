const Discord = require('discord.js');

exports.run = async(client, message) => {

let embed = new Discord.MessageEmbed()
.setColor("RANDOM")

.addField("**:tools: __Şuanki Gecikme Sürem__**", `**${client.ws.ping}** Ms Olarak Hesaplandı.`,true)

message.channel.send(embed)

}

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['ping', 'p' , 'gecikme'],
permLevel: 0
};

exports.help = {
name: 'ping',
description: 'Botun pingini gösterir',
usage: 'ping' };