import { useState } from "react";
import { useWriteContract } from "wagmi";
import { abi } from "../../ContractAbi.ts";

export default function TokenBuy() {
  // State for storing the input value
  const [inputValue, setInputValue] = useState<string>("");

  const { data, writeContract } = useWriteContract();

  function transfer() {
    // Check if the input is a valid number and convert it to BigInt
    const valueInBigInt = BigInt(inputValue);

    // Call the contract function with the BigInt value
    writeContract({
      abi,
      address: "0x0336c0d363c40123dd1345815d60332a3843f570",
      functionName: "token_buy",
      value: valueInBigInt,
    });
  }

  return (
    <div className="space-y-4 ">
    <div className="flex gap-4">

    
      <input
        type="text"
        placeholder="Enter amount in Wei"
        className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={transfer}>Buy Tokens</button>
      </div>

      <div className="text-lg text-gray-200 font-medium">
        <span className="text-indigo-400">Data:</span>{" "}
        {data || "No data available"}
      </div>
    </div>
  );
}
