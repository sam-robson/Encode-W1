import "dotenv/config";
import { program } from 'commander';
import { connect, attachToContract } from './ballotContractUtilities';

async function queryProposal(contractAddress: string, proposalIndex: number) {
    const wallet = await connect();
    const ballotContract = await attachToContract(contractAddress, wallet)

    console.log("Querying proposal");
    const proposal = await ballotContract.proposals(proposalIndex)
    return proposal;
}

async function main() {
    program
        .usage('[OPTIONS]...')
        .option('-p, --proposal <number>', 'Proposal index.')
        .option('-c, --contract_address <string>', 'Contract address.', process.env.CONTRACT_ADDRESS)
        .parse(process.argv);

    const options = program.opts();
    const proposal = await queryProposal(options.contract_address, options.proposal);
    console.log(proposal)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
