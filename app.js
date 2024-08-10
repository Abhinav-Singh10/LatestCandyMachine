
import dotenv from 'dotenv';
import {Keypair} from'@solana/web3.js';
import { validate } from 'uuid';
dotenv.config();
const numArray = Uint8Array.from(process.env.SECRET_KEY.split(',').map(Number));

console.log(numArray);


const keypair = Keypair.fromSecretKey(
    Uint8Array.from(numArray)
  ,{skipValidation:true});
  
console.log(keypair);
