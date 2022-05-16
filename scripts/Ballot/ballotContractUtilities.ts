import "dotenv/config";
import { ethers, Contract, Signer, Wallet } from "ethers";
import * as ballotJson from "../../artifacts/contracts/Ballot.sol/Ballot.json";

/**
 * Connect to an ethers wallet using the AlchemyProvider
 * @returns the wallet 
 */
export async function connect(): Promise<Wallet> {
    const wallet = new Wallet(process.env.PRIVATE_KEY!);
    console.log(`Using address ${wallet.address}`);
    const provider = new ethers.providers.AlchemyProvider("ropsten", process.env.ALCHEMY_API_KEY);
    const signer = wallet.connect(provider);
    const balanceBN = await signer.getBalance();
    const balance = Number(ethers.utils.formatEther(balanceBN));
    console.log(`Wallet balance ${balance}`);
    if (balance < 0.01) {
        throw new Error("Not enough ether");
    }
    return signer;
}

/**
 * Attaches to the ballot contract at the supplied address with the supplied wallet
 * @returns the contract
 */
export async function attachToContract(contractAddress: string, wallet: Signer): Promise<Contract> {
    console.log(
        `Attaching ballot contract interface to address ${contractAddress}`
    );
    return new Contract(
        contractAddress,
        ballotJson.abi,
        wallet
    );
}
