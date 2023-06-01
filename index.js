import { abi, contractAddress } from "./constants.js";
import { ethers } from "./ethers-5.1.esm.min.js";

let connectEl = document.getElementById("connectButton");
let appendEl = document.getElementById("appendButton");
connectEl.onclick = connect;

async function connect() {
  if (typeof window.ethereum != "undefined") {
    console.log("There is an Ethereum Based Wallet Available.");
    await window.ethereum.request({ method: "eth_requestAccounts" });
    connectEl.innerHTML = "Connected";
  }
}

function addStudent() {
  if (typeof window.ethereum != "undefined") {
    console.log("EVM-Wallet ok.");
    const cttAddress = contractAddress;
  }
}
