import { useWriteContract } from "wagmi"
import {abi} from '../../ContractAbi.ts';
export default function MintToken() {
    const { data, writeContract } = useWriteContract()
     function mint(){  
        writeContract({
            abi,
            address: '0x0336c0d363c40123dd1345815d60332a3843f570',
            functionName: 'mintToken',
            args:[
                12345n
            ],
        })
    }
    return (
        <div>
           <button onClick={mint}>Mint</button>
           data: {data as string}
        </div>
    )
}

