connectEl = document.getElementById("connectButton");

async function connect() {
  if (typeof window.ethereum != "undefined") {
    console.log("There is an Ethereum Based Wallet Available.");
    await window.ethereum.request({ method: "eth_requestAccounts" });
    connectEl.innerHTML = "Connected";
  }
}
