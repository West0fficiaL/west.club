const Discord = require('discord.js');
exports.run = async (client , message, args ) => {
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`Beni Sunucuna Davet Etmek İçin [Tıklayınız!](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8) \n  Destek Sunucuma Katılmak İçin [Tıklayınız!](https://discord.gg/ezCjqPzwyw)`)
message.channel.send(embed)
};
exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['davet'],
permLevel: 0
}
exports.help = {
name: 'davet'
};