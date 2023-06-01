require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  // Always remember to export a deployer to the contract
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};
