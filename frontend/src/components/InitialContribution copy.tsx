import { useWriteContract } from "wagmi"
import {abi} from '../../ContractAbi.ts';
export default function InitialContribution() {
    const { data, writeContract } = useWriteContract()
     function transfer(){  
        writeContract({
            abi,
            address: '0x0336c0d363c40123dd1345815d60332a3843f570',
            functionName: 'initial_contribute',
            value:
            BigInt("100000000000"),
        })
    }
     
    return (
        <div>
           <button onClick={transfer}>Tnx</button>
           data: {data as string}
        </div>
    )
}

