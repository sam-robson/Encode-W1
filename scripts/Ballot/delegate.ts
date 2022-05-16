import "dotenv/config";
import { program } from 'commander';
import { connect, attachToContract } from './ballotContractUtilities';

async function delegate(contractAddress: any, to: string) {
    const wallet = await connect();
    const ballotContract = await attachToContract(contractAddress, wallet)

    console.log(`Delegating vote to ${to}`);
    const tx = await ballotContract.delegate(to);
    console.log("Awaiting confirmations");
    await tx.wait();
    console.log("Vote delegated");
}

async function main() {
    program
        .usage('[OPTIONS]...')
        .option('-a, --address <string>', 'Address to delegate your vote to.')
        .option('-c, --contract_address <string>', 'Contract address.', process.env.CONTRACT_ADDRESS)
        .parse(process.argv);

    const options = program.opts();
    await delegate(process.env.CONTRACT_ADDRESS, options.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
