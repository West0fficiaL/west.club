const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
      if(message.author.id !== "766932288058818581") if(message.author.id !== "Diğer Geliştiricinin Idsi"){
  return message.channel.sendMessage(':no_entry_sign: Geliştiricim Değilsin!')
        };
    if (args[0] === "client.token")
    return message.channel.sendMessage('**Tokenimi Veremem!**');

      try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.sendCode("xl", clean(evaled));
    } catch (err) {
      message.channel.sendMessage(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eval'],
  permLevel: 0
};

exports.help = {
  name: 'eval',
  description: 'Kod denemek için kullanılır.',
  usage: 'eval [Kodunuz]'
};