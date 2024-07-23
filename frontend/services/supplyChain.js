import web3 from './web3';
import SupplyChain from '../../build/contracts/SupplyChain.json';

const contractAddress = '0x5FC9887AebbC69280f29290aEA191c3811a7A7A5'; // Address of deployed contract
const instance = new web3.eth.Contract(
  SupplyChain.abi,
  contractAddress
);

export default instance;
