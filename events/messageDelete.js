module.exports = {
  name: 'messageDelete',
  execute(message) {
    if (message.partial || !message.guild) return;

    const logChannel = message.guild.channels.cache.get('1140444333359763486');
    if (!logChannel) return;

    const messageLink = `https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id}`;

    logChannel.send(`🗑️ **Message deleted in <#${message.channel.id}>**
    **Author:** ${message.author.tag}
    **Jump (if cached):** [Link](${messageLink})
    **Content:** ${message.content || '*No text content*'}`);
  },
};
