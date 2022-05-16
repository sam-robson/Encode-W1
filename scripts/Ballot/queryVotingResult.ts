import "dotenv/config";
import { program } from 'commander';
import { connect, attachToContract } from './ballotContractUtilities';

async function queryVotingResult(contractAddress: any) {
    const wallet = await connect();
    const ballotContract = await attachToContract(contractAddress, wallet)

    console.log("Querying vote result");
    const winningProposal = await ballotContract.winningProposal();
    console.log(`The winning proposal is ${winningProposal}`);
}

async function main() {
    program
        .option('-c, --contract_address <string>', 'Contract address.', process.env.CONTRACT_ADDRESS)
        .parse(process.argv);

    const options = program.opts();
    await queryVotingResult(options.contract_address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
