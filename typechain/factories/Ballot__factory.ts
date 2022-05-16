/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Ballot, BallotInterface } from "../Ballot";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proposalNames",
        type: "bytes32[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "chairperson",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "voter",
        type: "address",
      },
    ],
    name: "giveRightToVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "voteCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposal",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "voters",
    outputs: [
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "voted",
        type: "bool",
      },
      {
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vote",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winnerName",
    outputs: [
      {
        internalType: "bytes32",
        name: "winnerName_",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winningProposal",
    outputs: [
      {
        internalType: "uint256",
        name: "winningProposal_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620014c9380380620014c983398181016040528101906200003791906200025b565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555060005b81518110156200019a576002604051806040016040528084848151811062000133577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151815260200160008152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508080620001919062000342565b915050620000e2565b505062000419565b6000620001b9620001b384620002c9565b620002a0565b90508083825260208201905082856020860282011115620001d957600080fd5b60005b858110156200020d5781620001f2888262000244565b845260208401935060208301925050600181019050620001dc565b5050509392505050565b600082601f8301126200022957600080fd5b81516200023b848260208601620001a2565b91505092915050565b6000815190506200025581620003ff565b92915050565b6000602082840312156200026e57600080fd5b600082015167ffffffffffffffff8111156200028957600080fd5b620002978482850162000217565b91505092915050565b6000620002ac620002bf565b9050620002ba82826200030c565b919050565b6000604051905090565b600067ffffffffffffffff821115620002e757620002e6620003bf565b5b602082029050602081019050919050565b6000819050919050565b6000819050919050565b6200031782620003ee565b810181811067ffffffffffffffff82111715620003395762000338620003bf565b5b80604052505050565b60006200034f8262000302565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141562000385576200038462000390565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6200040a81620002f8565b81146200041657600080fd5b50565b6110a080620004296000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063609ff1bd1161005b578063609ff1bd146101145780639e7b8d6114610132578063a3ec138d1461014e578063e2ba53f01461018157610088565b80630121b93f1461008d578063013cf08b146100a95780632e4176cf146100da5780635c19a95c146100f8575b600080fd5b6100a760048036038101906100a29190610acd565b61019f565b005b6100c360048036038101906100be9190610acd565b61030c565b6040516100d1929190610c5d565b60405180910390f35b6100e2610340565b6040516100ef9190610c27565b60405180910390f35b610112600480360381019061010d9190610aa4565b610364565b005b61011c610738565b6040516101299190610d66565b60405180910390f35b61014c60048036038101906101479190610aa4565b61080c565b005b61016860048036038101906101639190610aa4565b6109c3565b6040516101789493929190610d81565b60405180910390f35b610189610a20565b6040516101969190610c42565b60405180910390f35b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008160000154141561022a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022190610c86565b60405180910390fd5b8060010160009054906101000a900460ff161561027c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161027390610ca6565b60405180910390fd5b60018160010160006101000a81548160ff0219169083151502179055508181600201819055508060000154600283815481106102e1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906002020160010160008282546103019190610dd7565b925050819055505050565b6002818154811061031c57600080fd5b90600052602060002090600202016000915090508060000154908060010154905082565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff16156103f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f090610cc6565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610468576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045f90610d46565b60405180910390fd5b5b600073ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146105d857600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691503373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156105d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ca90610d06565b60405180910390fd5b610469565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060018160000154101561062d57600080fd5b60018260010160006101000a81548160ff021916908315150217905550828260010160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060010160009054906101000a900460ff161561071357816000015460028260020154815481106106e7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906002020160010160008282546107079190610dd7565b92505081905550610733565b816000015481600001600082825461072b9190610dd7565b925050819055505b505050565b6000806000905060005b60028054905081101561080757816002828154811061078a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600202016001015411156107f457600281815481106107dc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600202016001015491508092505b80806107ff90610e7f565b915050610742565b505090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461089a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089190610ce6565b60405180910390fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff161561092a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092190610d26565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541461097957600080fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555050565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16908060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154905084565b60006002610a2c610738565b81548110610a63577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906002020160000154905090565b600081359050610a898161103c565b92915050565b600081359050610a9e81611053565b92915050565b600060208284031215610ab657600080fd5b6000610ac484828501610a7a565b91505092915050565b600060208284031215610adf57600080fd5b6000610aed84828501610a8f565b91505092915050565b610aff81610e2d565b82525050565b610b0e81610e3f565b82525050565b610b1d81610e4b565b82525050565b6000610b30601483610dc6565b9150610b3b82610ef7565b602082019050919050565b6000610b53600e83610dc6565b9150610b5e82610f20565b602082019050919050565b6000610b76601283610dc6565b9150610b8182610f49565b602082019050919050565b6000610b99602883610dc6565b9150610ba482610f72565b604082019050919050565b6000610bbc601983610dc6565b9150610bc782610fc1565b602082019050919050565b6000610bdf601883610dc6565b9150610bea82610fea565b602082019050919050565b6000610c02601e83610dc6565b9150610c0d82611013565b602082019050919050565b610c2181610e75565b82525050565b6000602082019050610c3c6000830184610af6565b92915050565b6000602082019050610c576000830184610b14565b92915050565b6000604082019050610c726000830185610b14565b610c7f6020830184610c18565b9392505050565b60006020820190508181036000830152610c9f81610b23565b9050919050565b60006020820190508181036000830152610cbf81610b46565b9050919050565b60006020820190508181036000830152610cdf81610b69565b9050919050565b60006020820190508181036000830152610cff81610b8c565b9050919050565b60006020820190508181036000830152610d1f81610baf565b9050919050565b60006020820190508181036000830152610d3f81610bd2565b9050919050565b60006020820190508181036000830152610d5f81610bf5565b9050919050565b6000602082019050610d7b6000830184610c18565b92915050565b6000608082019050610d966000830187610c18565b610da36020830186610b05565b610db06040830185610af6565b610dbd6060830184610c18565b95945050505050565b600082825260208201905092915050565b6000610de282610e75565b9150610ded83610e75565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e2257610e21610ec8565b5b828201905092915050565b6000610e3882610e55565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610e8a82610e75565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610ebd57610ebc610ec8565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f486173206e6f20726967687420746f20766f7465000000000000000000000000600082015250565b7f416c726561647920766f7465642e000000000000000000000000000000000000600082015250565b7f596f7520616c726561647920766f7465642e0000000000000000000000000000600082015250565b7f4f6e6c79206368616972706572736f6e2063616e20676976652072696768742060008201527f746f20766f74652e000000000000000000000000000000000000000000000000602082015250565b7f466f756e64206c6f6f7020696e2064656c65676174696f6e2e00000000000000600082015250565b7f54686520766f74657220616c726561647920766f7465642e0000000000000000600082015250565b7f53656c662d64656c65676174696f6e20697320646973616c6c6f7765642e0000600082015250565b61104581610e2d565b811461105057600080fd5b50565b61105c81610e75565b811461106757600080fd5b5056fea2646970667358221220881160442c7d5c968dc08245791407e65d4922b18b2895baa81a78e8f34d032464736f6c63430008040033";

export class Ballot__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    proposalNames: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Ballot> {
    return super.deploy(proposalNames, overrides || {}) as Promise<Ballot>;
  }
  getDeployTransaction(
    proposalNames: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(proposalNames, overrides || {});
  }
  attach(address: string): Ballot {
    return super.attach(address) as Ballot;
  }
  connect(signer: Signer): Ballot__factory {
    return super.connect(signer) as Ballot__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BallotInterface {
    return new utils.Interface(_abi) as BallotInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Ballot {
    return new Contract(address, _abi, signerOrProvider) as Ballot;
  }
}
