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
    "It's looking good",
    "How should I know",
    "Very Likely"
]

client.on("ready", () => {
  console.info(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (msg) => {
  var randomResponse = responses[Math.floor(Math.random()*responses.length)];
  if (msg.content.includes('?')) {
    msg.reply(randomResponse)
  }
});

client.login(TOKEN);
