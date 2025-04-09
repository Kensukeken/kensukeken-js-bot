const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'userinfo',
  description: 'Get information about a user',
  async execute(message, args) {
    let user;

    // Try mention first
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    }
    // Try user ID
    else if (args[0]) {
      try {
        user = await message.client.users.fetch(args[0]);
      } catch (err) {
        return message.reply("Couldn't find a user with that ID.");
      }
    }
    // Default to author
    else {
      user = message.author;
    }

    // Fetch banner (requires full fetch)
    let bannerURL = null;
    try {
      const fetchedUser = await user.fetch(true);
      bannerURL = fetchedUser.bannerURL({ dynamic: true, format: 'png', size: 1024 });
    } catch (err) {
      console.warn('No banner found for user.');
    }

    const embed = new EmbedBuilder()
      .setTitle(`${user.username}'s Info`)
      .setThumbnail(user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setColor('Random')
      .addFields(
        { name: '👤 Username', value: `${user.tag}`, inline: true },
        { name: '🆔 ID', value: user.id, inline: true },
        { name: '📅 Created At', value: `<t:${Math.floor(user.createdTimestamp / 1000)}:F>`, inline: false }
      )
      .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) });

    if (bannerURL) {
      embed.setImage(bannerURL);
    }

    message.channel.send({ embeds: [embed] });
  }
  
};
