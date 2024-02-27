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
  const content = message.content.toLowerCase();
  let replyMessage!;

  switch (content) {
    case "!btc":
      replyMessage = `Bitcoin current price is: ${(await crypto()).bitcoinPrice} $`;
      break;
    case "!eth":
      replyMessage = `Etherium current price is: ${(await crypto()).ethereumPrice} $`;
      break;
    case "!rip":
      replyMessage = `Ripple current price is: ${(await crypto()).ripplePrice} $`;
      break;
    case "!lit":
      replyMessage = `Litecoin current price is: ${(await crypto()).litecoin} $`;
      break;
    case "!help":
      replyMessage = "Commands: \n !btc -> show bitcoin price \n !eth -> show etherium price \n !rip -> show ripple price \n !lit -> show litecoin price";
      break;
    default:
      replyMessage = "Invalid command. Type !help for available commands.";
  }

  message.reply(replyMessage);
});


client.login("MTIwODM2ODY5NjI0MzAwMzQyMg.GuySUT.UoARr63qzStGjsxl76gG-aQIXEWDi_ELPD77uQ");
