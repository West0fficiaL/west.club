const Discord = require('discord.js');


exports.run = async (client, message, args) => {

  if(!message.member.roles.cache.has("828059388932653097")) return message.channel.send(`Bu komutu kullanabilmek için yeterli yetkiye sahip olmasınız.`);
    let kullanıcı = message.mentions.users.first()
    if (!kullanıcı) return message.channel.send('**ŞŞ Kanka Kullanıcıyı Etiketlemeyi Unuttun :D**')
    let rol = message.mentions.roles.first()
    let member = message.guild.member(kullanıcı)
        if(!member) return message.channel.send(`Bir üye etiketle`)
member.roles.add("828637786600374273")
return message.channel.send(new Discord.MessageEmbed()
.setColor('RANDOM')
  .setDescription(`** ${member} Adlı Üye'ye  Başarıyla "Verified Bot" Rolü Verildi! :white_check_mark:**`)
  .setFooter(`Komutu Kullanan Yetkili : ${message.author.username}`))



};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['verified' , 'verifiedbot']
  };
  
  exports.help = {
    name: 'verifiedbot',
    description: '',
    usage: 'verifiedbot'
  };