module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    if (!interaction.isCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (err) {
      console.error(`❌ Error in interaction:`, err);
      await interaction.reply({ content: 'Something went wrong 😢', ephemeral: true });
    }
  },
};
