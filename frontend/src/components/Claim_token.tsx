import { useWriteContract } from "wagmi"
import {abi} from '../../ContractAbi.ts';
export default function ClaimToken() {
    const { data, writeContract } = useWriteContract()
     function transfer(){  
        writeContract({
            abi,
            address: '0x0336c0d363c40123dd1345815d60332a3843f570',
            functionName: 'Claim_Token',
            value:
            BigInt("100"),
        })
    }
     
    return (
        <div>
           <button onClick={transfer}>Claim Tokens</button>
           data: {data as string}
        </div>
    )
}

