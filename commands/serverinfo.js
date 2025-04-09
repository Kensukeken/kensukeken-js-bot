module.exports = {
  name: 'serverinfo',
  description: 'Displays information about the server.',
  execute(message, args) {
    const { guild } = message;

    const serverInfo = `🏠 **Server Info**
**Name:** ${guild.name}
**ID:** ${guild.id}
**Owner:** <@${guild.ownerId}>
**Members:** ${guild.memberCount}
**Created On:** ${guild.createdAt.toDateString()}
`;

    message.channel.send(serverInfo);
  },
};
