//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract LogFluency {
    struct student {
        uint256 fluencyRate;
        string name;
        string schoolIndex;
        address wallet;
    }

    student[] public allStudents;

    // Map student parameters
    mapping(address => uint256) public idToFluency;
    mapping(address => uint256) idToIndex;

    // mapping(address => string) addressToName; // Name of the student not relevant to the database.

    // Through an external database, every student will have an unique ID (wallet)
    // This will have a POC demo through MM

    // _fluencyRate must be given in with 8 decimal precision.
    function addStudent(
        uint256 _fluencyRate,
        string memory _name,
        string memory _schoolIndex,
        address _wallet
    ) public {
        idToIndex[_wallet] = allStudents.length; // Before not to waste gas in computing
        allStudents.push(
            student({
                fluencyRate: _fluencyRate,
                name: _name,
                schoolIndex: _schoolIndex,
                wallet: _wallet
            })
        );
        idToFluency[_wallet] = _fluencyRate;
    }

    // Precision decimals
    function getDecimals() public pure returns (uint256) {
        return uint256(8);
    }
}
