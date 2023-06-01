const { network, ethers, getNamedAccounts } = require("hardhat");
module.exports = async ({ getNamedAccounts, deployments }) => {
  // Grabs the deploy and the log
  const { deploy, log } = deployments;
  // The deployer account
  const { deployer } = await getNamedAccounts();
  // Which chainId are we working with
  const chainId = network.config.chainId;

  // Constructor args
  let args = [];
  // Deploys the contract
  const contract = await deploy("LogFluency", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });
};
