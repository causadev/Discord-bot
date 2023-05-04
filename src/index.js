require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content === "hello") {
    message.reply(`Hello ${message.author.username} 😎`);
  }
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content === "sheesh") {
    message.reply(`SHEEEEEEEEESH ${message.author.username} 😎`);
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  console.log(interaction.commandName);

  if (interaction.commandName === "hey") {
    interaction.reply("Hey!");
  }

  if (interaction.commandName === "ping") {
    interaction.reply("Pong!");
  }
});



client.login(process.env.TOKEN);
