const moment = require('moment');
const { prefix } = require('../config.json');

module.exports = {
  name: 'messageCreate',
  async execute(message) {
    if (message.author.bot) return;

    const time = moment().format('YYYY-MM-DD HH:mm:ss');
    const userTag = message.author.tag;
    const userID = message.author.id;
    const channelName = message.channel.name || 'DM';
    const content = message.content;

    // Log every message
    console.log(`[${time}] #${channelName} | ${userTag} (${userID}): ${content}`);

    // Check for prefix commands
    if (!content.startsWith(prefix)) return;

    const args = content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift()?.toLowerCase();
    if (!commandName) return;

    const command = message.client.commands.get(commandName);
    if (!command) return;

    // Log command use to console
    console.log(`[COMMAND] ${userTag} used \\${commandName}`);

    try {
      await command.execute(message, args);
    } catch (err) {
      console.error(`[${time}] [ERROR] while executing \\${commandName}:`, err);
      message.reply('There was an error executing that command.');
    }
  }
};
