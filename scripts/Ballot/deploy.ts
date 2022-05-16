import { ethers } from "ethers";
import "dotenv/config";
import * as ballotJson from "../../artifacts/contracts/Ballot.sol/Ballot.json";
import { connect } from './ballotContractUtilities';

function convertStringArrayToBytes32(array: string[]) {
  const bytes32Array = [];
  for (let index = 0; index < array.length; index++) {
    bytes32Array.push(ethers.utils.formatBytes32String(array[index]));
  }
  return bytes32Array;
}

async function deploy(deploymentArgs: any) {
  const wallet = await connect();
  console.log("Deploying contract");
  const contractFactory = new ethers.ContractFactory(
    ballotJson.abi,
    ballotJson.bytecode,
    wallet
  );
  const contract = await contractFactory.deploy(
    deploymentArgs,
  );
  console.log("Awaiting confirmations");
  await contract.deployed();
  console.log(`Contract deployed at ${contract.address}`);
}

async function main() {
  const proposals = convertStringArrayToBytes32(["Buy Luna", "Buy ETH"]);
  await deploy(proposals)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
