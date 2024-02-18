//  displaying fetched data with discord bot

// Notice !! API itself has subscription limit, currently i am using free tier which may reduce recourses

// get the index.js function from where i am grabbing the currencies
const crypto = require("./index.js");

// install discord.js and prompt
// discord documentation to simply give bot a life
const { Client, GatewayIntentBits, userMention } = require("discord.js");
const { message } = require("prompt");
const path = require("path");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

// simple debugger to check if bot works/ also shows up in discord
client.on("ready", readybot);

function readybot() {
  console.log("works");
}

// i needed async before messages  async message to get proper live data from API // chatgpt told me

client.on("messageCreate", async (message) => {
  if (message.content.toLowerCase() === "!btc") {
    const prices = await crypto();
    message.reply(`Bitcoin current price is: ${prices.bitcoinPrice} $`);
  }

  if (message.content.toLowerCase() === "!eth") {
    const prices = await crypto();
    message.reply(`Etherium current price is: ${prices.ethereumPrice} $`);
  }

  if (message.content.toLowerCase() === "!rip") {
    const prices = await crypto();
    message.reply(`Ripple current price is: ${prices.ripplePrice} $`);
  }

  if (message.content.toLowerCase() === "!lit") {
    const prices = await crypto();
    message.reply(`Ripple current price is: ${prices.litecoin} $`, {
      files: ["logos/Ethereum-Logo.wine.png"],
    });
  }

  if (message.content.toLowerCase() === "!help") {
    message.reply(
      `Commands: \n !btc  -> show bitcoin price \n !eth  ->  show etherium price \n !rip -> show ripple price \n !lit -> show litcoin price`
    );
  }
});

client.login("Enter your bot token and enjoy ;) ");
