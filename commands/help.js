const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Lists all available commands with descriptions and categories.',
  execute(message, args) {
    const commands = message.client.commands;

    // Group commands by category
    const categories = {};
    for (const [name, cmd] of commands) {
      const category = cmd.category || 'Other';
      if (!categories[category]) categories[category] = [];
      categories[category].push(cmd);
    }

    const embed = new EmbedBuilder()
      .setColor(0x2F3136)
      .setTitle('📘 Kensukeken Bot Help Menu')
      .setDescription('Welcome! Here’s a list of everything I can do:\nUse `\\<command>` to activate any command.')
      .setThumbnail(message.client.user.displayAvatarURL())
      .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL() })
      .setTimestamp();

    for (const category in categories) {
      const cmds = categories[category]
        .map(cmd => `\`\\${cmd.name}\` — ${cmd.description || 'No description'}`)
        .join('\n');
      embed.addFields({ name: `🗂️ ${category}`, value: cmds, inline: false });
    }

    embed.addFields(
      { name: '🔗 Useful Links', value: `[Invite Me](https://discord.com/oauth2/authorize?client_id=1045485835899912232&permissions=8&scope=bot) | [Support Server](https://discord.gg/wEyXEQAcTP)` }
    );

    message.channel.send({ embeds: [embed] });
  },
};
