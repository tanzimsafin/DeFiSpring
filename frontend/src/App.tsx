import "./App.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from "wagmi";
import { config } from "../config";
// import GetTotalFun from "./components/GetTotalFun";
import InitialContribution from "./components/InitialContribution";
import { WalletOptions } from "./components/walletOptions";
import { Account } from "./components/disconnect";
import MintToken from "./components/mintToken";
import GetMintedAmmount from "./components/GetMintCoin";
const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <WalletOptions/>
        <Account/>
        <InitialContribution/>
        {/* <GetTotalFun/> */}
        <MintToken/>
        <GetMintedAmmount/>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
export default App;
