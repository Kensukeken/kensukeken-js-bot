module.exports = {
  name: 'guildMemberAdd',
  execute(member) {
    const logChannel = member.guild.channels.cache.get('1140444333359763486');
    if (!logChannel) return;

    logChannel.send(`📥 **Member Joined:** ${member.user.tag} (${member.id})`);
  },
};
