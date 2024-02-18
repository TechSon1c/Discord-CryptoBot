//fetching data from gecko ip // btc eth lite and riple
const cryptoUrl =  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,ripple,bitcoin-cash&vs_currencies=usd'

async function crypto () {
    const cryptoApi = await fetch(cryptoUrl)
    const cryptoData = await cryptoApi.json();
    
    //fetching the only data i need which is prices

    const bitcoinPrice = cryptoData.bitcoin.usd;
    const ethereumPrice = cryptoData.ethereum.usd;
    const litecoinPrice = cryptoData.litecoin.usd;
    const ripplePrice = cryptoData.ripple.usd;

    // returned objects so i can use it in my bot.js file to get each element out from crypto()
    return {
        bitcoinPrice,
        ethereumPrice,
        litecoinPrice,
        ripplePrice
    };

}

crypto()

module.exports = crypto;
