module.exports = {
  name: 'clear',
  description: 'Clears a number of messages.',
  async execute(message, args) {
    const amount = parseInt(args[0]);
    if (isNaN(amount) || amount < 1 || amount > 100) {
      return message.reply('Please provide a number between 1 and 100.');
    }

    await message.channel.bulkDelete(amount, true);
    message.channel.send(`🧹 Cleared ${amount} messages.`).then(msg => {
      setTimeout(() => msg.delete(), 3000);
    });
  },
};
