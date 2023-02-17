const hre = require("hardhat");

async function main() {
  const NITsToken = await hre.ethers.getContractFactory("OceanToken");
  const NITSToken = await NITsToken.deploy(100000000, 50);

  await NITSToken.deployed();

  console.log("Ocean Token deployed: ", NITSToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
