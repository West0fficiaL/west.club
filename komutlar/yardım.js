const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(`west.club help command`)
.setDescription(`

 
:white_small_square: **=**  \`!temizle\` : **Kanaldaki Mesajları Silmenize Yardımcı Olur**
:white_small_square: **=**  \`!avatar\` : **Kullandığınız Profil Fotoğrafını Atar**
:white_small_square: **=**  \`!afk\` : **Birisi Etiket Atınca Afk Kalma Sebebinizi Atar**
:white_small_square: **=**  \`!ban\` : **Sunucuda İstediğiniz Kişiyi Engellemenize Yarar**
:white_small_square: **=**  \`!küfür-engel\` : **Sunucunuzda Küfürü Engeller**
:white_small_square: **=**  \`!reklam-engel\` : **Sunucuzda Reklam'ı Engeller**
:white_small_square: **=**  \`!jail\` : **Sunucudaki Bir Üyeyi Hapse Atar**
:white_small_square: **=**  \`!modlog\` : **Sunucuda Yapılan Değişiklikleri O Kanala Atar**
:white_small_square: **=**  \`!otorol\` : **Sunucuya Yeni Girenlere Rol Verir**
:white_small_square: **=**  \`!mute\` : **Kullanıcının Sunucuda Mesaj Yazmasını Engeller**
:white_small_square: **=**  \`!vmute\` : **Kullanıcının  Ses Kanallarına Girmesini Engeller**
:white_small_square: **=**  \`!unjail\` : **Hapse Attığınız Kullanıcıyı Hapisten Çıkartır**
:white_small_square: **=**  \`!unmute\` : **Sunucudaki Mutelediğiniz Kişinin Mutesini Kaldırır**
:white_small_square: **=**  \`!isim-değiştir\` : **İstediğiniz Kullanıcının İsmini Değiştirir**
:white_small_square: **=**  \`!saat\` : **Şuanki Saat'inizi Söyler**
:white_small_square: **=**  \`!ping\` : **Botun Pingini Söyler (Gecikme)**
:white_small_square: **=**  \`!istatistik\` : **Botun Bilgilerini Atar**
:white_small_square: **=**  \`!prefix\` : **İstediğiniz Prefix'i Yapabilirsiniz**




`)
.setImage("")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "help",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'help'
}; 