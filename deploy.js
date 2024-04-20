// Import ethers from Hardhat package
require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
    // This is just an example contract named "Contract"
    const Contract = await ethers.getContractFactory("Tracking");
    const contract = await Contract.deploy();

    await contract.deployed();

    console.log("Contract deployed to:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
