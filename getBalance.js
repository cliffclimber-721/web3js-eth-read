const Web3 = require("web3");
const rpcURL = "https://ropsten.infura.io/v3/777495b51bec4adf9706c571129f0972"

const web3 = new Web3(rpcURL);
const account = "0x38Df7aC4F3a0C50B31FDEc13e9B443356418Ec9A";

web3.eth.getBalance(account)
    .then((bal) => {
        console.log(`So the ${account} remainder is... ${bal}.`);
    })