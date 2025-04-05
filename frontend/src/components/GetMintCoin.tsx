import { useReadContract } from "wagmi"
import {abi } from '../../ContractAbi.ts';
import { useState } from "react";
export default function GetMintedAmmount() {
    const [details,setdetails]=useState(false);
    const {data,isLoading,error}=useReadContract({
        abi,
        address:"0x0336c0d363C40123DD1345815D60332a3843F570",
        functionName:"totalMintCoin"
    })
    function seeDetails(){
         setdetails(true);
    }
    return (
        <div>
            <button onClick={seeDetails}>Fund Ammount</button>
            {details &&(
                <div>
                 {isLoading && <p>Loading...</p>}
                 {error && <p>Error fetching data</p>}
                 Minted ammount:{data as string}
                </div>
            )}
            
            </div>
    )
}
