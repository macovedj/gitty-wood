//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Token {
  mapping(string => mapping(address => uint)) balances;
  mapping(string => address[]) owners;
  mapping(string => uint) numberOfRepoOwners;
  uint numberOfRepos = 0;

  function mint(uint totalSupply, string memory repoName) external {
    balances[repoName][msg.sender] = totalSupply;
    owners[repoName].push(msg.sender);
    numberOfRepoOwners[repoName] = 1;
    numberOfRepos++;
  }

  function transfer(address to, uint amount, string memory repoName) external {
    require(balances[repoName][msg.sender] >= amount, "Not enough tokens");
    balances[repoName][msg.sender] -= amount;
    balances[repoName][to] += amount;
    bool isAlreadyOwner = false;

    for (uint i=0; i < numberOfRepoOwners[repoName]; i++) {
      if (to == owners[repoName][i]) {
        isAlreadyOwner = true;
      }
    }

    if (!isAlreadyOwner) {
      owners[repoName].push(to);
      numberOfRepoOwners[repoName]++;
    }

    balances[repoName][to] += amount;
    balances[repoName][msg.sender] -= amount;
  }

  function balanceOf(address account, string memory repoName) external view returns (uint) {
    return balances[repoName][account];
  }

  function getOwners(string memory repoName) external view returns (address[] memory) {
    return owners[repoName];
  }
}
