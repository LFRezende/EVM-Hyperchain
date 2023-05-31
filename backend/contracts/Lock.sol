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
    mapping(string => uint256) nameToFluency;
    mapping(address => string) addressToName;

    // Through an external database, every student will have an unique ID (wallet)
    // This will have a POC demo through MM
    function addStudent(
        uint256 _fluencyRate,
        string memory _name,
        string memory _schoolIndex,
        address _wallet
    ) public {
        allStudents.push(
            student({
                fluencyRate: _fluencyRate,
                name: _name,
                schoolIndex: _schoolIndex,
                wallet: _wallet
            })
        );
    }
}
