const Web3 = require("web3");
const rpcURL = "https://ropsten.infura.io/v3/777495b51bec4adf9706c571129f0972";
const web3 = new Web3(rpcURL);

const txId = "0x863af3529efac3412c7333eb96e8cbe9602699e3e2b0fc1b89e38f2a6526bdc2";

console.log(`======= This is getPendingTransactions log. =======`);
web3.eth.getPendingTransactions(txId)
    .then((trans) => {
        console.log(trans)
    });
    