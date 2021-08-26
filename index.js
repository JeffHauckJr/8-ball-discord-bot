require("dotenv").config();
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const TOKEN = process.env.TOKEN;

const responses = [
    "Probably not",
    "Unlikely",
    "Who knows",
    "How should I know?"
]

client.on("ready", () => {
  console.info(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (msg) => {
  if (msg.content.includes('?')) {
    var randomResponse = responses[Math.floor(Math.random()*responses.length)];
    msg.channel.send(randomResponse)
  }
});

client.login(TOKEN);
