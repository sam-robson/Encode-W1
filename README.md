# Process
## 0. Setup
Before running any scripts I set up the following environment variables in `.env`:
```
ALCHEMY_API_KEY
PRIVATE_KEY
```
These are used to deploy the contract as I do so using the `ethers.AlchemyProvider`.
## 1. Deployment
I deployed the contract using command `yarn run deploy`. This deployed a ballot contract with 2 hardcoded proposals:
```
a: Buy ETH
b: Buy Luna
```
Additionally, this printed the contract address to the console, which I then saved as the `CONTRACT_ADDRESS` env var, to make the later steps simpler.
## 2. Giving voting rights
I then gave voting rights to 3 new accounts, by running `yarn run giveVotingRghts -a ...` with the 3 addresses.
## 3. Voting, delegating, and checking the results
I voted with the first account by running `yarn run voteForProposal -p 0`, and checked the winning proposal using the commands `yarn run queryProposal -p 0` and 
`yarn run queryVotingResult` to ensure this worked. And it did - the first command revealed that 1 vote had been cast for proposal 0, and the second command revealed that proposal 0 was currently winning.

After this, I then delegated the vote from the 2nd new account to that of the 1st using `yarn run delegate -a ...`. As the 1st account had already voted for proposal 0, this updated the votes for proposal 0 from 1 to 2. I verified this using `yarn run queryProposal -p 0`.

Finally, with the 3rd new account I voted for proposal 1, before verifying that 0 remained the winning proposal and that the votes had been cast as expected, by running the scripts to query each proposal and to query the voting result.

