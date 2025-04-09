const moment = require('moment');

module.exports = {
  name: 'messageCreate',
  async execute(message) {
    if (message.author.bot) return;

    const time = moment().format('YYYY-MM-DD HH:mm:ss');
    const userTag = message.author.tag;
    const userID = message.author.id;
    const channelName = message.channel.name || 'DM';
    const content = message.content;

    // Log format exactly as requested
    console.log(`[${time}] #${channelName} | ${userTag} (${userID}): ${content}`);

    // Command handling
    const prefix = '\\';
    if (!content.startsWith(prefix)) return;

    const args = content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = message.client.commands.get(commandName);

    if (!command) return;

    try {
      await command.execute(message, args);
    } catch (err) {
      console.error(`[${time}] [ERROR] while executing ${prefix}${commandName}:`, err);
      message.reply('There was an error executing that command.');
    }


    if (message.content.startsWith(prefix)) {
      const commandName = args.shift().toLowerCase();
      const command = client.commands.get(commandName);
      
      if (!command) return;
    
      console.log(`[COMMAND] ${message.author.tag} used \\${commandName}`);
    
      const logChannel = message.guild.channels.cache.get('1140444333359763486');
      if (logChannel) {
        logChannel.send(`🧠 **Command Used:** \`${commandName}\` by ${message.author.tag}`);
      }
    
      try {
        command.execute(message, args);
      } catch (error) {
        console.error(error);
        message.reply('There was an error executing that command.');
      }
    }
    
  }
};
