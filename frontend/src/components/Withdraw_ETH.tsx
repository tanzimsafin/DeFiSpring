import { useWriteContract } from "wagmi"
import {abi} from '../../ContractAbi.ts';
export default function WithdrawETH() {
    const { data, writeContract } = useWriteContract()
     function withdraw(){  
        writeContract({
            abi,
            address: '0x0336c0d363c40123dd1345815d60332a3843f570',
            functionName: 'withDrawMoney',
        })
    }
     
    return (
        <div>
           <button onClick={withdraw}>Withdraw</button>
           data: {data as string}
        </div>
    )
}

