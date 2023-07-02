import { ethers } from 'ethers';
const providerURL = 'https://bsc-dataseed1.binance.org';
const provider = new ethers.providers.JsonRPcProvider(providerURL);
// Proving it works
const blockNumber = await provider.getBlockNumber();
console.log('Latest block number', blockNumber);
