import "dotenv/config";
import { program } from 'commander';
import { connect, attachToContract } from './ballotContractUtilities';

async function giveVotingRights(contractAddress: any, to: string) {
  const wallet = await connect();
  const ballotContract = await attachToContract(contractAddress, wallet)

  const chairpersonAddress = await ballotContract.chairperson();
  if (chairpersonAddress !== wallet.address)
    throw new Error("Caller is not the chairperson for this contract");
  console.log(`Giving right to vote to ${to}`);
  const tx = await ballotContract.giveRightToVote(to);
  console.log("Awaiting confirmations");
  await tx.wait();
  console.log(`Voting rights given to ${to}`)
}

async function main() {
  program
    .option('-a, --address <string>', 'Address to give voting rights to.')
    .option('-c, --contract_address <string>', 'Contract address.', process.env.CONTRACT_ADDRESS)
    .parse(process.argv);

  const options = program.opts();
  await giveVotingRights(options.contract_address, options.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
