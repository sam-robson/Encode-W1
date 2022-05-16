import "dotenv/config";
import { program } from 'commander';
import { connect, attachToContract } from './ballotContractUtilities';

async function voteForBallot(contractAddress: string, proposal: number) {
    const wallet = await connect();
    const ballotContract = await attachToContract(contractAddress, wallet)

    console.log(`Voting for proposal ${proposal}`);
    await ballotContract.vote(proposal)
    console.log("Vote cast");
}

async function main() {
    program
        .option('-c, --contract_address <string>', 'Contract address.', process.env.CONTRACT_ADDRESS)
        .option('-p, --proposal <number>', 'Proposal to vote for.')
        .parse(process.argv);

    const options = program.opts();
    await voteForBallot(options.contract_address, options.proposal);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
