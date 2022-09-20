const Web3 = require("web3");
const rpcURL = "https://ropsten.infura.io/v3/777495b51bec4adf9706c571129f0972";
const web3 = new Web3(rpcURL);
const blockNum = "13014901";

web3.eth.getBlock(blockNum)
    .then((obj) => {
        console.log(obj)
    })