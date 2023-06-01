import { abi, contractAddress } from "./constants.js";
import { ethers } from "./ethers-5.1.esm.min.js";

let connectEl = document.getElementById("connectButton");
let appendEl = document.getElementById("appendButton");
let inputName = document.getElementById("inputName");
let inputWallet = document.getElementById("inputWallet");
let inputFluency = document.getElementById("inputFluency");

connectEl.onclick = connect;
appendEl.onclick = addStudent;

async function connect() {
  if (typeof window.ethereum != "undefined") {
    console.log("There is an Ethereum Based Wallet Available.");
    await window.ethereum.request({ method: "eth_requestAccounts" });
    connectEl.innerHTML = "Connected";
  }
}

async function addStudent() {
  if (typeof window.ethereum != "undefined") {
    console.log("EVM-Wallet ok.");
    // Grabbing parameters of the student
    const name = inputName.value;
    const wallet = inputWallet.value;
    const fluency = inputFluency.value;
    const schoolIndex = "0x0000000";

    // Grabbing parameters for function calling
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const cttAddress = contractAddress;
    const contractAbi = abi;
    const contract = new ethers.Contract(cttAddress, contractAbi, signer);
    // Trying to call function:
    try {
      const txResponse = await contract.addStudent(
        fluency,
        name,
        schoolIndex,
        wallet
      );
      console.log("Student appended to the blockchain database");
    } catch (e) {
      console.log("Deu ruimmmmmmmm");
    }
  }
}
