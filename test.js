import dotenv from 'dotenv';
dotenv.config()
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
const numArray = process.env.SECRET_KEY.split(',').map(Number);
 
const keypair = getKeypairFromEnvironment(numArray);
 
console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`,
);