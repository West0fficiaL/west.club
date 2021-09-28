const Discord = require('discord.js');

exports.run = async (client, message, args) => {
       if(isNaN(args[0])){
         const embeds = new Discord.MessageEmbed()
         .setColor("RANDOM")
         .setDescription("Lütfen Sayı Yaz!")
         message.channel.send(embeds)
       }else{

         let icon = client.user.displayAvatarURL();
        if (client.guilds.cache.size < args[0]){
         const embedss = new Discord.MessageEmbed()
         .setColor("RANDOM")
         .setDescription(`${client.emojis.cache.get(client.emoji.king)}`+" Bu Komutu Kullana Bilmek İçin Botun En Az "+args[0]+" Sunucuda Olması Lazım.")
         message.channel.send(embedss)
          message.channel.send()
        }else{

         let content = "";
         const top = client.guilds.cache.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
          for (let i = 0; i < args[0]; i++) {

            content += `${i+1}. **${top[i].name}** ~ **${top[i].memberCount}** Kullanıcı Bulunmaktadır. \n`
            }
         message.channel.send(`${content}`, {split: true, code: "yaml"});
        }
       }
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'sunucusay', 
  description: '',
  usage: 'sunucusay'
};