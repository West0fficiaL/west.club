const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');

    const night = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayColor)
    .setTitle(message.guild.name)
        .addField("👥 Sunucudaki üye sayısı", message.guild.memberCount)
        .addField("🌐 Çevrimiçi üye sayısı", message.guild.members.cache.filter(m => m.user.presence.status !== "offline").size)
       .addField("⛔ Dnd üye sayısı", message.guild.members.cache.filter(m => m.user.presence.status == "dnd").size)
       .addField("🌙 Boşta üye sayısı", message.guild.members.cache.filter(m => m.user.presence.status == "idle").size)
        .addField("💤 Çevrimdışı üye sayısı", message.guild.members.cache.filter(m => m.user.presence.status == "offline").size)
        
    message.channel.send(night);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['üye-say'],
    permLevel: 0
};

exports.help = {
    name: 'üyesay',
    description: 'Üye Say',
 } 