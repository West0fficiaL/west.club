const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const botbilgi = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Yenilikler: \n**1** !say Komutu Eklendi.! \n**2** !destek Komutu Eklendi.! \n**3** !saat Komutu Eklendi.! \n**4** !tag Komutu Eklendi.! \n**5** !davet Komutu Eklendi.!');
    message.channel.send(botbilgi) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Yenilikleri gösterir.',
  usage: 'yenilikler'
};