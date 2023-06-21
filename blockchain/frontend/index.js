import { abi, contractAddress, localContractAddress } from "./constants.js";
import { ethers } from "./ethers-5.7.esm.min.js";

let connectEl = document.getElementById("connectButton");
let appendEl = document.getElementById("appendButton");
let inputName = document.getElementById("inputName");
let inputWallet = document.getElementById("inputWallet");
let inputFluency = document.getElementById("inputFluency");


connectEl.onclick = connect;
appendEl.onclick = append;

async function connect() {
  if (typeof window.ethereum != "undefined") {
    console.log("There is an Ethereum Based Wallet Available.");
    await window.ethereum.request({ method: "eth_requestAccounts" });
    if (window.ethereum.chainId == 5)
      connectEl.innerHTML = "Connected - Goerli";
    else if (window.ethereum.chainId == 31337)
      connectEl.innerHTML = "Connected - Hardhat";
    else connectEl.innerHTML = "Network Not Supported";
  }
}

async function append() {
  if (typeof window.ethereum != "undefined") {
    console.log("EVM-Wallet ok.");
    // Grabbing parameters of the student
    const name = inputName.value;
    console.log(name);
    const wallet = inputWallet.value;
    console.log(wallet);
    const fluency = inputFluency.value;
    console.log(fluency);
    const schoolIndex = "";

    // Grabbing parameters for function calling
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    let cttAddress = "";
    if (window.ethereum.chainId == 5) cttAddress = contractAddress;
    else if (window.ethereum.chainId == 31337)
      cttAddress = localContractAddress;
    else {
      console.log("Not supported network!");
      return;
    }
    const contractAbi = abi;
    const contract = new ethers.Contract(cttAddress, contractAbi, signer);
    console.log(cttAddress);
    // Trying to call function:
    try {
      console.log("Chegou1");
      const txTest = await contract.getDecimals();
      const txResponse = await contract.addStudent(
        fluency,
        name,
        schoolIndex,
        wallet
      );
      console.log("Student appended to the blockchain database");
    } catch (e) {
      console.log("Deu ruimmmmmmmm");
      console.log(e);
    }
  }
}
