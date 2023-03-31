import hre, { ethers } from "hardhat";

async function main() {
  const contract = await ethers.deployContract("ERC4907", ["NEMEOS NFT", "NEMS"]);

  await contract.deployed();

  console.log("Greeter deployed to:", contract.address);

  // Uncomment if you want to enable the `tenderly` extension
  // await hre.tenderly.verify({
  //   name: "Greeter",
  //   address: contract.address,
  // });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
