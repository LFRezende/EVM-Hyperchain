export const localContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
export const contractAddress = "0xCE9037d07a489d2E7605De5D47838Df6BC5A14E7";
// Abi of the contract
export const abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fluencyRate",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_schoolIndex",
        type: "string",
      },
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "addStudent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allStudents",
    outputs: [
      {
        internalType: "uint256",
        name: "fluencyRate",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "schoolIndex",
        type: "string",
      },
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDecimals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "idToFluency",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
