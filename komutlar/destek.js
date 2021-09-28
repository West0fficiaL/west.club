const Discord = require('discord.js')

exports.run = function(client, message, args,params) {

 let destek = "827288270370635786"///destek log kanal id

 let yetkili = "823368410268041237" /// destek ekibi rol ID

message.channel.send(`**Destek Ekibine Çağrını İlettim, Kısa Süre İçinde İlgilenecekler.**`)

message.channel.createInvite({maxAge: 0}).then((invite) => {

const embed = new Discord.MessageEmbed()

.setTitle("Bir Destek Çağrısı Var!")

.addField("Sunucu İsmi:", message.guild.name, true)

.addField("Sunucu Sahbi:", message.guild.owner, true)

.addField("Davet Linki:", invite.url, true)

.setFooter(`Derhal yardıma gidin!!`)

client.channels.cache.get(destek).send(embed).then(client.channels.cache.get(destek).send(`<@&${yetkili}>`))

});

  

};

exports.conf = {

  aliases: ['destek' , 'destekekibi'],

  enabled: true,

  guildOnly: false,

  permLevel: 0

};

exports.help = {

  name: 'destek',

  description: 'Destek ekibi çağırırsınız',

  usage: 'destek',

};