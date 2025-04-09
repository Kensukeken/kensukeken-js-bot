module.exports = {
  name: 'messageUpdate',
  execute(oldMessage, newMessage) {
    if (oldMessage.partial || !oldMessage.guild) return;
    if (oldMessage.content === newMessage.content) return;

    const logChannel = oldMessage.guild.channels.cache.get('1140444333359763486');
    if (!logChannel) return;

    const messageLink = `https://discord.com/channels/${oldMessage.guild.id}/${oldMessage.channel.id}/${oldMessage.id}`;

    logChannel.send(`✏️ **Message edited in <#${oldMessage.channel.id}>**
    **Author:** ${oldMessage.author.tag}
    **Jump to Message:** [Click Here](${messageLink})
    **Before:** ${oldMessage.content}
    **After:** ${newMessage.content}`);
  },
};
