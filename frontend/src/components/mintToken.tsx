import  { SetStateAction, useState } from 'react';
import { useWriteContract } from 'wagmi';
import { abi } from '../../ContractAbi.ts';

export default function MintToken() {
    const { data, writeContract } = useWriteContract();
    const [argsValue, setArgsValue] = useState('');

    const mint = () => {
        writeContract({
            abi,
            address: '0x0336c0d363c40123dd1345815d60332a3843f570',
            functionName: 'mintToken',
            args: [BigInt(argsValue)], // Convert input value to BigInt if needed
        });
    };

    const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setArgsValue(event.target.value);
    };

    return (
        <div>
            <input
                className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                type="text"
                value={argsValue}
                onChange={handleInputChange}
                placeholder="Enter eth value"
            />
            <button onClick={mint}>Mint</button>
            <div>data: {data as string}</div>
        </div>
    );
}
