const { Discord, MessageEmbed } = require("discord.js");
const db = require("quick.db");

exports.run = async function(client, message, args) {
  if (!message.member.hasPermission("MANAGE_GUILD")) {
    const embed = new MessageEmbed()
      .setColor("#0AFF00")
      .setDescription(`Bunun için yetkin yok.`)
      .setFooter(`${client.user.username} Uyarı sistemi.`,message.guild.iconURL({ dynamic: true }))
      .setTimestamp();
    message.channel.send(embed);
    return;
  }
  const uyarıLimit = await db.fetch(`uyarıUserLimit.${message.guild.id}`);
  if (args[0] == "sıfırla" || args[0] == "sifirla") {
    if (uyarıLimit == null || !uyarıLimit) {
      const embed = new MessageEmbed()
        .setColor("#0AFF00")
        .setDescription(`Sunucudaki uyarı limit sistemi zaten aktif değil.`)
        .setFooter(`${client.user.username} Uyarı sistemi.`,message.guild.iconURL({ dynamic: true }))
        .setTimestamp();
      message.channel.send(embed);
      return;
    } else {
      await db.delete(`uyarıUserLimit.${message.guild.id}`);
      const embed = new MessageEmbed()
        .setColor("#0AFF00")
        .setDescription(`Sunucudaki uyarı limit sistemi başarıyla sıfırlandı.`)
        .setFooter(`${client.user.username} Uyarı sistemi.`,message.guild.iconURL({ dynamic: true }))
        .setTimestamp();
      message.channel.send(embed);
      return;
    }
  }
  if (await db.fetch(`uyarıUserLimit.${message.guild.id}`)) {
    const embed = new MessageEmbed()
      .setColor("#0AFF00")
      .setDescription(`Sunucudaki uyarı limit sistemi zaten aktif.\nSıfırlamak için ?uyarılimit sıfırla.`)
      .setFooter(`${client.user.username} Uyarı sistemi.`,message.guild.iconURL({ dynamic: true }))
      .setTimestamp();
    message.channel.send(embed);
    return;
  }
  const miktar = args[0];
  if (!miktar) {
    const embed = new MessageEmbed()
      .setColor("#0AFF00")
      .setDescription(`Bir rakam girmelisin.\nDoğru kullanım ?uyarılimit 5`)
      .setFooter(`${client.user.username} Uyarı sistemi.`,message.guild.iconURL({ dynamic: true }))
      .setTimestamp();
    message.channel.send(embed);
    return;
  } else if (isNaN(miktar)) {
    const embed = new MessageEmbed()
      .setColor("#0AFF00")
      .setDescription(`Bir rakam girmelisin.\nDoğru kullanım ?uyarılimit 5`)
      .setFooter(`${client.user.username} Uyarı sistemi.`,message.guild.iconURL({ dynamic: true }))
      .setTimestamp();
    message.channel.send(embed);
    return;
  } else {
    await db.set(`uyarıUserLimit.${message.guild.id}`, miktar);
    const embed = new MessageEmbed()
      .setColor("#0AFF00")
      .setDescription(`Sunucudaki Uyarı-Limit sistemi başarıyla aktif edildi.\nLimit: ${miktar}`)
      .setFooter(`${client.user.username} Uyarı sistemi.`,message.guild.iconURL({ dynamic: true }))
      .setTimestamp();
    message.channel.send(embed);
    return;
  }
};

exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['uyar' , 'warn'],
       permLevel: 0

};

exports.help = {
  name: 'uyarı limit',
  description: 'Uyarı limiti koyar.',
  usage: 'uyarı <kullanıcı>'
};