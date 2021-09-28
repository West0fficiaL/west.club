const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    let kanal = message.mentions.channels.first()
    const hedef = args[1]

    if(!kanal) return message.channel.send(`lütfen bir kanal etikeylin`)
    if(!hedef) return message.channel.send(`hedef girin`)
    if(isNaN(hedef)) return message.channel.send("hedef girin")
    if(message.guild.memberCount > hedef) return message.channel.send("hedefiniz sunucu saysından küçük olamaz")

    db.set(`SKanal_${message.guild.id}`, kanal.id)
    db.set(`hedef_${message.guild.id}`, hedef)

    message.channel.send(`kanal ${kanal} olarak ayarlandı kişi ise ${hedef} olarak ayarlandı!`)
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [''],
    permLevel: 2
};
  
  exports.help = {
    name: 'sayaç',
    description: '',
    usage: 'sayaç'
};