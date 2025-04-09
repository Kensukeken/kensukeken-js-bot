# 💠 Kensukeken Discord Bot

A powerful and scalable Discord bot built with **Discord.js**. Kensukeken Bot offers modular commands, detailed logging, and helpful utilities to manage your server with style.

---

## 🧠 Features

- 🧹 `\clear` — Bulk delete messages in a channel
- ❓ `\help` — List all available commands
- 🛰️ `\ping` — Check bot responsiveness
- 🧑 `\userinfo` — Get detailed info about a user
- 🌐 `\serverinfo` — Display server metadata
- 📝 Auto-logging for message edits, deletions, joins/leaves
- ♻️ Modular structure with dynamic loading

---

## 🗂️ Project Structure

```
DISCORD-BOT/
├── commands/              # Command handlers
│   ├── clear.js
│   ├── help.js
│   ├── ping.js
│   ├── serverinfo.js
│   └── userinfo.js
│
├── events/                # Event listeners
│   ├── guildMemberAdd.js
│   ├── guildMemberRemove.js
│   ├── interactionCreate.js
│   ├── logger.js
│   ├── messageCreate.js
│   ├── messageDelete.js
│   ├── messageUpdate.js
│   └── ready.js
│
├── node_modules/
├── .env                   # Environment variables
├── index.js               # Main entry file
├── package.json
├── package-lock.json
└── README.md              # You are here
```

---

## ⚙️ Setup

### 1. Clone the repository

```bash
git https://github.com/Kensukeken/kensukeken-js-bot.git
cd kensukeken-js-discord-bot
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file:

```env
DISCORD_TOKEN=your-bot-token-here
PREFIX=\
LOG_CHANNEL_ID=your-log-channel-id
```

> ⚠️ Do NOT share your `.env` file.

---

## 🚀 Run the Bot

```bash
node index.js
```

For example, you should see:

```
Logged in as Kensukeken Bot#9116, watching everything...
```

---

## 🪵 Logging

The bot logs the following:

- 🆕 Messages sent
- ✏️ Messages edited (before/after)
- 🗑️ Messages deleted (with link)
- ➕ Members joined
- ➖ Members left

All logs go to your specified log channel.

---

## ➕ Add New Commands

To add a new command, create a file in the `commands/` folder:

```js
module.exports = {
  name: "example",
  description: "Does something cool",
  execute(message, args) {
    message.channel.send("Example command executed!");
  }
};
```

---

## 🤝 Contributing

PRs and suggestions are welcome! Help improve the bot or add your own features.

---


## 🔗 Useful Links

- [Discord.js Docs](https://discord.js.org/)
- [Node.js](https://nodejs.org/)