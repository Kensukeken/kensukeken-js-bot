const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  name: 'e',
  description: 'Shows the last emoji or gif used in the channel.',
  async execute(message, args) {
    // Get the last 20 messages
    const messages = await message.channel.messages.fetch({ limit: 20 });
    const lastEmojiOrGif = messages
      .filter(msg => msg.id !== message.id)
      .find(msg =>
        /<a?:\w+:\d+>/.test(msg.content) || // Custom emoji
        msg.embeds.some(embed => embed.url?.includes('tenor.com')) || // Tenor gif
        msg.content.match(/https:\/\/tenor\.com\/view\/.*\.gif/) // Raw gif URL
      );

    if (!lastEmojiOrGif) {
      return message.reply('No recent emoji or gif found.');
    }

    const customEmojiMatch = lastEmojiOrGif.content.match(/<a?:(\w+):(\d+)>/);
    if (customEmojiMatch) {
      const isAnimated = customEmojiMatch[0].startsWith('<a:');
      const emojiURL = `https://cdn.discordapp.com/emojis/${customEmojiMatch[2]}${isAnimated ? '.gif' : '.png'}`;
      return message.channel.send({ content: `Here’s your emoji:`, files: [emojiURL] });
    }

    const gifEmbed = lastEmojiOrGif.embeds.find(embed => embed.url?.includes('tenor.com'));
    if (gifEmbed) {
      return message.channel.send({ content: `Here’s your gif:`, files: [gifEmbed.url] });
    }

    const gifUrlMatch = lastEmojiOrGif.content.match(/https:\/\/tenor\.com\/view\/.*\.gif/);
    if (gifUrlMatch) {
      return message.channel.send({ content: `Here’s your gif:`, files: [gifUrlMatch[0]] });
    }

    return message.reply('Couldn’t find a valid emoji or gif.');
  }
};
