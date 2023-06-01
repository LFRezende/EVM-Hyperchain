let connectEl = document.getElementById("connectButton");
import { abi, contractAddress } from "./constants.js";
import { ethers } from "./ethers-5.1.esm.min.js";
connectEl.onclick = addStudent;
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
