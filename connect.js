const express = require("express");
const app = express();
const port = 8080;
const Web3 = require("web3");

function getWeb3() {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
    return web3;
}

async function getAccounts() {
    try {
        const accounts = await getWeb3().eth.getAccounts();
        console.log(accounts);
        return accounts;
    } catch(error) {
        console.log(error)
        return error;
    }
}

async function getGasPrice() {
    try {
        const gasPrice = await getWeb3().eth.getGasPrice();
        console.log(gasPrice);
        return gasPrice;
    } catch(error) {
        console.log(error);
        return error;
    }
}

async function getBlock() {
    try {
        const getBlock = await getWeb3().eth.getBlock();
        console.log(getBlock);
    } catch (error) {
        console.log(error);
        return error;
    }
}

app.get("/accounts", (req, res) => {
    getAccounts()
        .then((acc) => {
            res.send(acc);
        })
});

app.get("/gasprice", (req, res) => {
    getGasPrice()
        .then((gas) => {
            res.send(gas);
        })
})

app.get("/block", (req, res) => {
    getBlock()
        .then((block) => {
            res.send(block);
        })
})

app.listen(port, () => {
    console.log("Listening...");
})
