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