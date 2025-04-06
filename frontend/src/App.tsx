import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "../config";

import { WalletOptions } from "./components/walletOptions";
import { Account } from "./components/disconnect";
import InitialContribution from "./components/InitialContribution";
import MintToken from "./components/mintToken";
import GetMintedAmmount from "./components/GetMintCoin";
import TokenBuy from "./components/TokenBuy";
import ClaimToken from "./components/Claim_token";
import WithdrawETH from "./components/Withdraw_ETH";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          {/* HEADER */}
          <header className="pt-12 pb-10 mb-6">
            <div className="max-w-5xl mx-auto text-center px-6">
              <div className="flex justify-center items-center gap-3 mb-4">
                <img
                  src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=026"
                  alt="Ethereum"
                  className="w-10 h-10"
                />
                <h1 className="text-4xl font-bold text-blue-400 tracking-tight">
                  DeFiSpring
                </h1>
              </div>
              <p className="text-gray-400 text-base max-w-lg mx-auto">
                A decentralized finance platform for wallet management, token minting and asset tracking
              </p>
            </div>
          </header>

          {/* WALLET CONNECTION BAR */}
          <div className="bg-gray-800 bg-opacity-50 py-4 mb-8 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-300">Connect Your Wallet</h2>
              <div className="flex gap-4">
                <WalletOptions />
              </div>
            </div>
          </div>

          {/* DASHBOARD */}
          <main className="max-w-5xl mx-auto px-6 pb-12">
            {/* Account Overview */}
            <div className="bg-gray-800 bg-opacity-30 rounded-xl p-6 mb-8 backdrop-blur-sm border border-gray-700">
              <h2 className="text-xl font-medium text-blue-300 mb-4">Account Overview</h2>
              <Account />
            </div>
            
            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="bg-gray-800 bg-opacity-30 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
                  <h2 className="text-xl font-medium text-blue-300 mb-4 flex items-center">
                    <span className="mr-2">📥</span> Initial Contribution
                  </h2>
                  <InitialContribution />
                </div>
                
                <div className="bg-gray-800 bg-opacity-30 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
                  <h2 className="text-xl font-medium text-blue-300 mb-4 flex items-center">
                    <span className="mr-2">💸</span> Token Buy
                  </h2>
                  <TokenBuy />
                </div>
                
                <div className="bg-gray-800 bg-opacity-30 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
                  <h2 className="text-xl font-medium text-blue-300 mb-4 flex items-center">
                    <span className="mr-2">💰</span> Minted Amount
                  </h2>
                  <GetMintedAmmount />
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-gray-800 bg-opacity-30 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
                  <h2 className="text-xl font-medium text-blue-300 mb-4 flex items-center">
                    <span className="mr-2">🪙</span> Mint Token
                  </h2>
                  <MintToken />
                </div>
                
                <div className="bg-gray-800 bg-opacity-30 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
                  <h2 className="text-xl font-medium text-blue-300 mb-4 flex items-center">
                    <span className="mr-2">🎁</span> Claim Token
                  </h2>
                  <ClaimToken />
                </div>
                
                <div className="bg-gray-800 bg-opacity-30 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
                  <h2 className="text-xl font-medium text-blue-300 mb-4 flex items-center">
                    <span className="mr-2">📤</span> Withdraw ETH
                  </h2>
                  <WithdrawETH />
                </div>
              </div>
            </div>
          </main>

          {/* FOOTER */}
          <footer className="text-center text-gray-500 text-sm py-6 mt-auto border-t border-gray-800 bg-black bg-opacity-30">
            <div className="max-w-5xl mx-auto px-6">
              <span className="text-blue-400 font-medium">DeFiSpring</span> • Built by Tanzim Safin • {new Date().getFullYear()}
            </div>
          </footer>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}

export default App;